import React from 'react'
import PropTypes from 'prop-types'
import debounce from 'lodash.debounce'
import throttle from 'lodash.throttle'

import Cell from './Cell'
import GroupHeading from './GroupHeading'
import calcRenderableItems from './calcRenderableItems'
import computeLayout from './computeLayout'
import computeLayoutGroups from './computeLayoutGroups'
import getUrl from './utils/getUrl'

import styles from './styles.css'

export default class Pig extends React.Component {
  constructor(props) {
    super(props)

    if (!props.imageData) throw new Error('imageData is missing')
    if (props.groups && !props.imageData[0].items) {
      throw new Error(`Used 'groups' prop but the imageData provided is in the wrong format. Check the package readme.md for a guide on how to prepare the imageData.`)
    }

    // if getUrl has been provided as a prop, use it. otherwise use the default getUrl from /utils
    this.getUrl = props.getUrl || getUrl

    this.imageData = props.imageData

    this.state = {
      renderedItems: [],
      activeCell: null
    }

    this.windowHeight = window.innerHeight,
    this.containerOffsetTop = null
    this.totalHeight = 0

    this.containerRef = React.createRef()
    this.titleRef = React.createRef()
    this.minAspectRatio = null
    this.latestYOffset = 0
    this.scrollDirection = 'down'

    this.settings = {
      gridGap: Number.isInteger(props.gridGap) ? props.gridGap : 8,
      primaryImageBufferHeight: props.primaryImageBufferHeight || 2500,
      secondaryImageBufferHeight: props.secondaryImageBufferHeight || 100,

      // settings specific to groups
      groups: props.groups || false,
      breakpoint: props.breakpoint || 800,
      groupGapSm: props.groupGapSm || 50,
      groupGapLg: props.groupGapLg || 50,
      bgColor: props.bgColor || '#fff',
    }

    this.throttledScroll = throttle(this.onScroll, 200)
    this.debouncedResize = debounce(this.onResize, 500)
  }

  setRenderedItems(imageData) {
    // Set the container height, only need to do this once.
    if (!this.container.style.height) this.container.style.height = this.totalHeight + 'px'

    const renderedItems = calcRenderableItems({
      containerOffsetTop: this.containerOffsetTop,
      scrollDirection: this.scrollDirection,
      settings: this.settings,
      latestYOffset: this.latestYOffset,
      imageData: imageData,
      windowHeight: this.windowHeight,
    })

    this.setState({ renderedItems })
  }

  onScroll = () => {
    // Compute the scroll direction using the latestYOffset and the previousYOffset
    this.previousYOffset = this.latestYOffset || window.pageYOffset
    this.latestYOffset = window.pageYOffset
    this.scrollDirection = (this.latestYOffset > this.previousYOffset) ? 'down' : 'up'

    window.requestAnimationFrame(() => {
      this.setRenderedItems(this.imageData)
      // dismiss any active cell
      if (this.state.activeCell) this.setState({ activeCell: null })
    })
  }

  onResize = () => {
    this.imageData = this.getUpdatedImageLayout()
    this.setRenderedItems(this.imageData)
    this.container.style.height = this.totalHeight + 'px' // set the container height again based on new layout
    this.containerWidth = this.container.offsetWidth
  }

  getUpdatedImageLayout() {
    const wrapperWidth = this.container.offsetWidth

    if (this.settings.groups) {

      const {
        imageData,
        newTotalHeight
      } = computeLayoutGroups({
        wrapperWidth,
        minAspectRatio: this.minAspectRatio,
        imageData: this.imageData,
        settings: this.settings,
      })
  
      this.totalHeight = newTotalHeight
      return imageData
    } else {
      const {
        imageData,
        newTotalHeight
      } = computeLayout({
        wrapperWidth,
        minAspectRatio: this.minAspectRatio,
        imageData: this.imageData,
        settings: this.settings,
      })

      this.totalHeight = newTotalHeight
      return imageData
    }
    

  }

  componentDidMount() {
    this.container = this.containerRef.current
    this.containerOffsetTop = this.container.offsetTop
    this.containerWidth = this.container.offsetWidth
    window.addEventListener('scroll', this.throttledScroll)
    window.addEventListener('resize', this.debouncedResize)

    this.imageData = this.getUpdatedImageLayout()
    this.setRenderedItems(this.imageData)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.throttledScroll)
    window.removeEventListener('resize', this.debouncedResize)
  }

  renderCell = (item) => (
    <Cell
      windowHeight={this.windowHeight}
      containerWidth={this.containerWidth}
      key={item.url}
      item={item}
      gridGap={this.settings.gridGap}
      getUrl={this.getUrl}
      handleClick={activeCell => {
        this.setState({
          // if cell is already active, deactivate it
          activeCell: activeCell !== this.state.activeCell ? activeCell : null
        })
      }}
      scrollY={window.scrollY}
      activeCell={this.state.activeCell}
      settings={this.settings}
    />
  )

  renderGroup = group => (
    <React.Fragment key={group.date}>
      <GroupHeading settings={this.settings} group={group} />
      {group.items.map(item => this.renderCell(item))}
    </React.Fragment>
  )

  renderFlat = item => this.renderCell(item)

  render() {
    return (
      <div
        className={styles.output}
        ref={this.containerRef}
        style={{ margin: `${this.settings.gridGap}px` }}
      >
        {this.state.renderedItems.map(item => {
          if (this.settings.groups) {
            return this.renderGroup(item)
          } else {
            return this.renderFlat(item)
          }
        })}
      </div>
    )
  }
}

Pig.propTypes = {
  imageData: PropTypes.array.isRequired,
  gridGap: PropTypes.number,
  getUrl: PropTypes.func,
  primaryImageBufferHeight: PropTypes.number,
  secondaryImageBufferHeight: PropTypes.number,
}
