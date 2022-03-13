class BudgetApp {
    openModalBtn = document.querySelector('.openModal');
    backdrop = document.querySelector('.backdrop');
    closeModalBtn = document.querySelector('.close');
    registerBtn = document.querySelector('.register');

    // input
    description = document.querySelector('#description');
    type = document.querySelector('#type');
    amount = document.querySelector('#amount');
    date = document.querySelector('#date');

    //balance
    zarlaga = document.querySelector('.zarlaga');
    orlogo = document.querySelector('orlogo');
    balance = document.querySelector('balance');

    budgetList = [];
    zarlaga = 0;
    orlogo = 0;
    balance = 0;

    constructor() {
        this.listenEvents();
        this.checkBalance()
    }

    openModal() {
        this.backdrop.classList.add('open')
    }

    closeModal() {
        this.backdrop.classList.remove('open');
        this.resetForm();
    }

    addBudget() {
        const budget = {
            description : this.description.value,
            type : this.type.value,
            amount : this.amount.value,
            date : this.date.value,
            id : Math.random().toString().split('.')[1]
        }
        this.budgetList.push(budget);
        this.checkBalance()
        this.closeModal();
    }

    resetForm() {
        this.description.value = '';
        this.type.value = '+';
        this.amount.value = '';
        this.date.value = '';
    }

    checkBalance() {
        let niitZarlaga, niitOrlogo;
        niitZarlaga = this.budgetList.filter(item => item.type == '-').map(item => item.amount);
        niitOrlogo = this.budgetList.filter(item => item.type == '+').map(item => item.amount);

        if(!niitOrlogo.length) {
            niitOrlogo = 0
        } else {
            niitOrlogo.reduce((a, b) => a + b);
        }

        if(!niitZarlaga.length) {
            niitZarlaga = 0
        } else {
            niitZarlaga.reduce((a, b) => a + b);
        }

        return {
            totalIncome : niitOrlogo,
            totalExpence : niitZarlaga,
            balance : niitOrlogo - niitZarlaga
        }
    }

    listenEvents() {
        this.openModalBtn.addEventListener('click', this.openModal.bind(this));
        this.closeModalBtn.addEventListener('click', this.closeModal.bind(this));
        this.registerBtn.addEventListener('click', this.addBudget.bind(this));
    }
}

const app = new BudgetApp();