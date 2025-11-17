// script.js

// ======== 1. 在这里改数据即可 ========
// 当前学习/工作时长（小时）
const currentHours = 6.0;
// 目标时长（小时）
const targetHours = 5.0;
// ==================================

// 找到页面上的元素
const statusText = document.getElementById('status-text');
const summaryText = document.getElementById('summary-text');
const circle = document.querySelector('.circle');
const hoursText = document.getElementById('hours-text');

// 显示数字
hoursText.textContent = `${currentHours.toFixed(1)}h`;
summaryText.textContent = `${currentHours.toFixed(1)}h / ${targetHours.toFixed(1)}h`;

// 判断是否达标
if (currentHours >= targetHours) {
  // ✅ 达标：绿色
  statusText.textContent = '✅ 已达标';
  circle.classList.remove('circle-not-ok');
  circle.classList.add('circle-ok');
} else {
  // ❗ 未达标：红色
  statusText.textContent = '⚠️ 未达标';
  circle.classList.remove('circle-ok');
  circle.classList.add('circle-not-ok');
}
  