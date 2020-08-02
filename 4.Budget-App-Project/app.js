//Budget Controller
var budgetController = (function() {
    
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var calculateTotal = function(type) {
        var sum = 0;
        data.allItems[type].forEach(function(current) {
            sum += current.value;
        });
        data.totals[type] = sum;
    };

    var data = {
        
        allItems: {
            exp: [],
            inc: []
        },

        totals: {
            exp: 0,
            inc: 0
        },

        budget: 0,
        percentage: -1
    };

    return {
        addItem: function(type, des, val) {
            
            var newItem, id;

            //create new id
            if (data.allItems[type].length > 0){
                id = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                id = 0;
            }

            //create new item based on type
            if (type === 'exp') {
                newItem = new Expense(id, des, val);
            } else if (type === 'inc') {
                newItem = new Income(id, des, val);
            }

            //push the new item to data structure
            data.allItems[type].push(newItem);

            //return new element
            return newItem;
        },

        calculateBudget: function() {

            //calculate total income and expenses
            calculateTotal('exp');
            calculateTotal('inc');

            //calculate the budget 
            data.budget = data.totals.inc - data.totals.exp;

            //calculate the % of income
            if (data.totals.inc > 0) {
                data.percentage = Math.round((data.totals.exp/data.totals.inc) * 100);
            } else {
                data.percentage = -1;
            }
        },

        getBudget: function() {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            }
        },

        testing: function() {
            console.log(data);
        }
    };


})();






//UI Controller
var uiController = (function() {
    
    var domStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expenseContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expenseLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage'

    };

    return {

        getInput: function() {
            return{
                // User Input
                type: document.querySelector(domStrings.inputType).value,//either inc/exp
                description: document.querySelector(domStrings.inputDescription).value,
                value: parseFloat(document.querySelector(domStrings.inputValue).value)
            };
        },

        addListItem: function(obj, type) {
            var html, newHtml, element;

            //create html string with placeholder
            if (type === 'inc'){
                element = domStrings.incomeContainer;
                html = '<div class="item clearfix" id="income-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';

            } else if (type === 'exp') { 
                element = domStrings.expenseContainer;
                html = '<div class="item clearfix" id="expense-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__percentage">21%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
            }

            //replace the placeholder text with data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            //insert html to dom
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
            
        },

        clearFields: function() {
            var fields, fieldsArray;
            fields = document.querySelectorAll(domStrings.inputDescription+ ', ' + domStrings.inputValue);

            fieldsArray = Array.prototype.slice.call(fields);

            fieldsArray.forEach(function(current, index, array) {
                current.value = "";
                current.description = "";
            });

            fieldsArray[0].focus();
        },

        displayBudget: function(obj) {
             document.querySelector(domStrings.budgetLabel).textContent = obj.budget;
             document.querySelector(domStrings.incomeLabel).textContent = obj.totalInc;
             document.querySelector(domStrings.expenseLabel).textContent = obj.totalExp;

            if (obj.percentage > 0) {
                document.querySelector(domStrings.percentageLabel).textContent = obj.percentage + '%';
            } else {
                document.querySelector(domStrings.percentageLabel).textContent = '---';
            }
        },

        getDomStrings: function() {
            return domStrings;
        }
    };
    
})();






//App Controller
var controller = (function(budgetCtrl, uiCtrl) {
    
    var setUpEventListener = function() {
        
        //dom strings
        var dom = uiCtrl.getDomStrings;

        console.log(dom);
        //button clicked
        document.querySelector('.add__btn').addEventListener('click', CtrlAddItem);

        //enter key pressed
        document.addEventListener('keypress', function(event) {
            if(event.keyCode === 13 || event.which === 13) {
               CtrlAddItem();
            }
        });
    };

    var updateBudget = function() {

        // 1. Calculate budget
        budgetCtrl.calculateBudget();

        // 2. return budget
        var budget = budgetCtrl.getBudget();

        // 3. Display budget
        uiCtrl.displayBudget(budget);
    };
    //Add item
    var CtrlAddItem = function() {
        
        var input, newItem;

        // 1. Get Field Input Data
        input = uiCtrl.getInput();

        if (input.description !== "" && !isNaN(input.value) && input.value > 0) {

        // 2. Add item to the budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);

        // 3. Add item to the ui
        uiCtrl.addListItem(newItem, input.type);

        // 4. Clear fields
        uiCtrl.clearFields();

        // 5. calculate and update budget
        updateBudget();
        }
    };

    return {
        init: function() {
            console.log('Application Started');
            uiCtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: 0
            });
            setUpEventListener();
        }
    }

})(budgetController, uiController);

controller.init();