const antdBreakpoint = {
  xs: '480px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1600px',
}

const checkBreakpoint = (widthNum = 0) => {
  try {
    // const getKeyByValue = (object, value) => {
    //   return Object.keys(object).find(key => object[key] === value)
    // }

    let keyAntdBreakpoint = Object.keys(antdBreakpoint)
    let valuesAntdBreakpoint = Object.values(antdBreakpoint)
    let lastIndex = valuesAntdBreakpoint.length - 1
    let recursionFindBreakpoint = (nowIndex) => {
      if (nowIndex < 0) {
        return keyAntdBreakpoint[0]
      } else {
        let widthVal = parseInt(valuesAntdBreakpoint[nowIndex].replace("px", ""))
        if (widthNum <= widthVal) {
          return recursionFindBreakpoint(nowIndex - 1)
        } else {
          return keyAntdBreakpoint[nowIndex]
        }
      }
    }
    let breakpoint = recursionFindBreakpoint(lastIndex)
    // console.log(breakpoint)
    return breakpoint

    // let breakpointArray = Object.values(antdBreakpoint).map(item => parseInt(item.replace("px", "")))
    // let closest;
    // console.log(breakpointArray)
    // breakpointArray.some((item) => {
    //   if (widthNum <= item) {
    //     closest = item;
    //     return true;
    //   }
    // });
    // console.log(closest)

  } catch (error) {
    return error
  }
}

export default checkBreakpoint