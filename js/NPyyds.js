/**
 * 图片链接
 * 效果 <img src = "img/NPy60.png">
 */
const imgSrc = "img/NPy60.png";


/**
 * 标题内容
 * 加载时图片下面的标题
 */
const title = "涅槃科技";


/**
 * 跳转链接【可选】
 * 如果是空值【null】就会触发隐藏加载模式
 */
const url = "https://npyyds.top/";


/**
 * 背景地址
 * 效果 <link rel="stylesheet" href="css/NPyyds.css">
 */
const cssHref = "css/NPyyds.css";


// 不建议修改后面的配置 请遵守开源许可
console.log("-------------------------");
console.log("涅槃科技 © 版权所有");
console.log("One: npyyds.top");
console.log("Two: buy.npyyds.top");
console.log("点击链接加入腾讯频道【涅槃科技】: https://pd.qq.com/s/7s4bjpv06");
console.log("项目开源地址: https://gitee.com/newNP/");
console.log("项目开源地址: https://github.com/NirvanaTec/");
console.log("-------------------------");
console.log("");
console.log("如果你使用此项目，请不要删除上面的信息！");
console.log("最终解释权归涅槃科技所有！");

window.onload = function () {

    const elements = document.querySelectorAll('*'); // 所有元素
    const old = []; // 备份所有可见

    if (url == null) {
        elements.forEach(element => {
            old.push(element.style.display);  // 备份可见
            if (element.tagName !== "HTML" && element.tagName !== "HEAD" && element.tagName !== "BODY") {
                element.style.display = "none";
            }
        });
    }

    const css = document.createElement("link"); // 背景css引用
    css.rel = "stylesheet";
    css.href = cssHref;
    document.body.appendChild(css); // 背景css引用

    const nirvana = document.createElement("div"); // 图片和标题分组
    nirvana.className = "Nirvana";

    const nirvanaimg = document.createElement("img"); // 图片
    nirvanaimg.src = imgSrc;

    const nirvanatitle = document.createElement("p"); // 标题
    nirvanatitle.textContent = title;

    nirvana.appendChild(nirvanaimg); // 图片
    nirvana.appendChild(nirvanatitle); // 标题

    const space = document.createElement("div"); // 高斯模糊
    space.className = "NirvanaSpace";

    const background = document.createElement("div"); // 背景图
    background.className = "Nirvanabackground";

    document.body.appendChild(nirvana); // 图片和标题
    document.body.appendChild(space); // 高斯模糊
    document.body.appendChild(background); // 背景图

    // 复原初始状态
    setTimeout(() => {
        if (url == null) {
            document.body.removeChild(nirvana); // 图片和标题
            document.body.removeChild(space); // 高斯模糊
            document.body.removeChild(background); // 背景图
            document.body.removeChild(css); // 背景css引用
            elements.forEach((element, index) => {
                element.style.display = old[index];  // 恢复原始可见
            });
        } else {
            window.location.href = url;
        }
    }, 2300);
};