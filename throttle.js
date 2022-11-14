function throttle (fn, time) {
  let canUse = true // 设置一个开关
  return function () {
    if (!canUse) {
      return false
    } // 如果开关已经关掉了就不用往下了
    // if(canUse) fn.apply(this,arguments)//fn放这里是立即执行
    canUse = false // 利用闭包刚进来的时候关闭开关
    setTimeout(() => {
      fn.apply(this, arguments) //fn放这里是非立即执行，定时器结束才执行
      canUse = true // 执行完才打开开关
    }, time)
  }
}
