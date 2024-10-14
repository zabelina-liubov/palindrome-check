const userInput = document.getElementById('text-input');
const checkPalindromeBtn = document.getElementById('check-btn');
const res = document.getElementById('result');

const checkForPalindrome = (input) => {
    const originalInput = input;

    if (input === '') {
        alert('Please input a value');
        return;
    }

    res.replaceChildren();

    const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
    let resultMsg = `<i>${originalInput}</i> ${
        lowerCaseStr === [...lowerCaseStr].reverse().join('') ? 'is' : 'is not'
    } a palindrome.`;

    const pTag = document.createElement('p');
    pTag.className = 'user-input';
    pTag.innerHTML = resultMsg;
    res.appendChild(pTag);

    res.classList.remove('hidden');
};

checkPalindromeBtn.addEventListener('click', (event) => {
    event.preventDefault(); 
    checkForPalindrome(userInput.value);
    userInput.value = '';
});
