//Budget Controller
var budgetController = (function() {
    //some code
})();




//UI Controller
var uiController = (function() {
    //some code
}());






//App Controller
var controller = (function(budgetCtrl, uiCtrl) {
    
    //Add item
    var ctrlAddItem = function(){
        
        // 1. Get Field Input Data
        // 2. Add item to the budget controller
        // 3. Add item to the ui
        // 4. Calculate budget
        // 5. Display budget
        console.log('add item clicked');

    }

    //button clicked
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    //enter key pressed
    document.addEventListener('keypress', function(event) {
        if(event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });
})(budgetController, uiController);