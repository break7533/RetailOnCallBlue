addEventListener('click', go);

const wait = (amount = 0) => new Promise(resolve => setTimeout(resolve, amount));

async function changeColor() {
    const onCall = document.querySelectorAll('button[label="On Call(Retail)"]')

    for (var i = 0; i < onCall.length; i++) {
        onCall[i].style.background = '#01baee';
    }
}

async function go() {
    await waitForCalendar();
    console.log('checking if any on call')
    await wait(500);
    changeColor();
}

async function waitForCalendar() {
    return new Promise((resolve, reject) => {
        const interval = setInterval(function () {
            console.log('checking for calendar...');
            const calendar = document.querySelector('.WG53');
            const nextMonthButton = document.querySelector('button[data-automation-id=nextMonthButton]');

            if (calendar && nextMonthButton) {
                const isActive = nextMonthButton.dataset.automationActivebutton === 'true';
                if (isActive) {
                    console.log('IT WORKED')
                    clearInterval(interval);
                    resolve();
                }
            }
        }, 1000);
    });
}

go();

