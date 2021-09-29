export default function ({
  containerOffsetTop,
  scrollDirection,
  settings,
  latestYOffset,
  imageData,
  windowHeight,
  updateGroups,
  updateItems,
  scaleOfImages,
}) {
  // Get the top and bottom buffers heights
  const bufferTop =
    scrollDirection === "up"
      ? settings.primaryImageBufferHeight
      : settings.secondaryImageBufferHeight;
  const bufferBottom =
    scrollDirection === "down"
      ? settings.primaryImageBufferHeight
      : settings.secondaryImageBufferHeight;

  // Now we compute the location of the top and bottom buffers
  // that is the top of the top buffer. If the bottom of an image is above that line, it will be removed.
  const minTranslateYPlusHeight =
    latestYOffset - containerOffsetTop - bufferTop;

  // that is the bottom of the bottom buffer.  If the top of an image is
  // below that line, it will be removed.
  const maxTranslateY = latestYOffset + windowHeight + bufferBottom;

  if (settings.groupByDate) {
    // Here, we loop over every image, determine if it is inside our buffers
    const arrOfGroups = [];
    imageData.forEach((g) => {
      // If the group is not within the buffer then remove it
      if (
        g.groupTranslateY + g.height < minTranslateYPlusHeight ||
        g.groupTranslateY > maxTranslateY
      ) {
        return;
      }
      // Only add images of the group that are within the buffer
      g.items = g.items.filter((img) => {
        if (
          img.style.translateY + img.style.height < minTranslateYPlusHeight ||
          img.style.translateY > maxTranslateY
        ) {
          return false;
        } else {
          return true;
        }
      });
      arrOfGroups.push(g);
    });

    //function to update visible groups
    updateGroups(arrOfGroups);

    return arrOfGroups;
  } else {
    var visibleItems = imageData.filter((img) => {
      if (
        img.style.translateY + img.style.height < minTranslateYPlusHeight ||
        img.style.translateY > maxTranslateY
      ) {
        return false;
      } else {
        return true;
      }
    });
    //function to update visible items
    updateItems(visibleItems);
    return visibleItems.filter(
      (item) => item.isTemp == false || item.isTemp == undefined
    );
  }
}
