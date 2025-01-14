const header = document.getElementById('header')
const main = document.getElementById("main")
const startScreen = document.getElementById('startscreen')
const rule = document.getElementById('rules')
const ruleText = document.getElementById('ruletext')
const startButton = document.getElementById('startbutton')
const controlRule = document.getElementById('controlrule')
const ruleButton = document.getElementById('rulebutton')
const closeButton = document.getElementById('closebutton')

startButton.addEventListener('click', () => {
    startScreen.classList.add('hidden')
    header.classList.remove('hidden')
    main.classList.remove('hidden')
    rule.classList.remove('hidden')
})
controlRule.addEventListener('click', () => {
    const closeButton = controlRule.querySelector('#closebutton');
    const isCloseButtonVisible = closeButton && !closeButton.classList.contains('hidden');
    const isRuleTextVisible = !ruleText.classList.contains('hidden');

    if (isCloseButtonVisible || isRuleTextVisible) {
        
        ruleText.classList.add('hidden');
        closeButton.classList.add('hidden');
        ruleButton.classList.remove('hidden');
    } else {
        
        if (!closeButton) {

            const newCloseButton = document.createElement('img');
            newCloseButton.setAttribute('src', './images/close.svg');
            newCloseButton.id = 'closebutton';
            newCloseButton.classList.add('w-5', 'h-5');
            controlRule.appendChild(newCloseButton);
        } else {
            closeButton.classList.remove('hidden');
        }
        ruleText.classList.remove('hidden');
        ruleButton.classList.add('hidden');
    }
});