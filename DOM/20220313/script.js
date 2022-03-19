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
    orlogo = document.querySelector('.orlogo');
    balance = document.querySelector('.balance');

    tbody = document.querySelector('table.list tbody');
    filter = document.querySelector('.filter');
    sort = document.querySelector('.sort');

    budgetList = [
        { description: 'fdgdfgd', type: '+', amount: 43534534, date: '2022-03-01', id: '23757684615332053' },
        { description: 'fgdfg', type: '+', amount: 435345345, date: '2022-03-23', id: '5924508344978474' },
        { description: 'dfgdfg', type: '+', amount: 345345, date: '2022-03-17', id: '6049211653827982' },
        { description: '34dgdfg', type: '-', amount: 345345, date: '2022-04-01', id: '11928010918180232' },
        { description: '2fdgdfgdfg', type: '-', amount: 345345, date: '2022-03-25', id: '0018230099535496702' },
        { description: 'sdfsdf', type: '+', amount: 4234234, date: '2022-03-26', id: '4885077973915417' },
        { description: 'sdfsdf', type: '+', amount: 234234, date: '', id: '6458583884803402' },
        { description: 'sfdsdfsdf', type: '-', amount: 234234, date: '2022-04-01', id: '01282046505456' }
    ];

    constructor() {
        this.listenEvents();
        this.updateUI();
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
            description: this.description.value,
            type: this.type.value,
            amount: +this.amount.value,
            date: this.date.value,
            id: Math.random().toString().split('.')[1]
        }
        this.budgetList.push(budget);
        this.updateUI();
        this.renderList(this.budgetList);
        this.closeModal();
    }

    resetForm() {
        this.description.value = '';
        this.type.value = '+';
        this.amount.value = '';
        this.date.value = '';
    }

    checkBalance() {
        var niitZarlaga, niitOrlogo;
        niitZarlaga = this.budgetList.filter(item => item.type == '-').map(item => item.amount);
        niitOrlogo = this.budgetList.filter(item => item.type == '+').map(item => item.amount);

        if (!niitOrlogo.length) {
            niitOrlogo = 0
        } else {
            niitOrlogo = niitOrlogo.reduce((a, b) => a + b);
        }

        if (!niitZarlaga.length) {
            niitZarlaga = 0
        } else {
            niitZarlaga = niitZarlaga.reduce((a, b) => a + b);
        }

        return {
            totalIncome: niitOrlogo,
            totalExpence: niitZarlaga,
            balance: niitOrlogo - niitZarlaga
        }
    }

    renderList(arr) {
        this.tbody.innerHTML = '';
        arr.forEach(function (item) {
            app.tbody.insertAdjacentHTML('afterbegin', `
                <tr class="border-b">
                    <td class="flex gap-2 px-4 ${item.type == '+' ? 'text-green-500' : 'text-red-400'} py-2 items-center">
                        <p class="font-bold">${item.description}</p>
                        <i class="fa-solid ${item.type == '+' ? 'fa-arrow-up' : 'fa-arrow-down'}"></i>
                    </td>
                    <td class="${item.type == '+' ? 'text-green-500' : 'text-red-400'} text-center">${item.amount}</td>
                    <td class="font-[500] text-[#666] text-center">${item.date}</td>
                </tr>
            `)
        })
    }

    updateUI() {
        const balances = this.checkBalance();
        this.zarlaga.innerHTML = balances.totalExpence;
        this.orlogo.innerHTML = balances.totalIncome;
        this.balance.innerHTML = balances.balance;
    }

    searchFilter(e) {
        let list = [];
        if (e.target.value == 'income') {
            list = this.budgetList.filter(item => item.type == '+')
        } else if (e.target.value == 'expence') {
            list = this.budgetList.filter(item => item.type == '-')
        } else {
            list = [...this.budgetList];
        }
        this.renderList(list);
    }

    sortList(e) {
        let list = [];
        if (e.target.value == 'decrease') {
            list = this.budgetList.sort(function (x, y) {
                return x.amount - y.amount;
            });
        } else if (e.target.value == 'increase') {
            list = this.budgetList.sort(function (x, y) {
                return y.amount - x.amount;
            });
        } else {
            list = this.budgetList.sort(function (x, y) {
                return new Date(x.date) - new Date(y.date)
            });
        }
        this.renderList(list);
    }

    listenEvents() {
        this.openModalBtn.addEventListener('click', this.openModal.bind(this));
        this.closeModalBtn.addEventListener('click', this.closeModal.bind(this));
        this.registerBtn.addEventListener('click', this.addBudget.bind(this));
        this.filter.addEventListener('change', this.searchFilter.bind(this));
        this.sort.addEventListener('change', this.sortList.bind(this));
    }
}

const app = new BudgetApp();