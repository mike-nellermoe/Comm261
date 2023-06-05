var form = document.getElementById('addForm');
var table = document.getElementById('forwards');

form.addEventListener('submit', addItem);
table.addEventListener('click', removeItem);

function addItem(e) {
    e.preventDefault();

    //get input value
    var newItem = document.getElementById('item').value;
    var table = document.getElementById('forwards');
    var tableBody = document.getElementById('forwardBody');

    //create new tr element
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    var td6 = document.createElement('td');
    var td7 = document.createElement('td');
    var td8 = document.createElement('td');
    var td9 = document.createElement('td');

    //add text node with input value
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);
    tr.appendChild(td8);
    tr.appendChild(td9);

    td1.appendChild(document.createTextNode(newItem));
    td2.appendChild(document.createTextNode('*'));
    td3.appendChild(document.createTextNode('*'));
    td4.appendChild(document.createTextNode('*'));
    td5.appendChild(document.createTextNode('*'));
    td6.appendChild(document.createTextNode('*'));
    td7.appendChild(document.createTextNode('*'));
    td8.appendChild(document.createTextNode('*'));
    td9.appendChild(document.createTextNode('*'));

    tableBody.appendChild(tr);

}

function removeItem(e) {
    var tableBody = document.getElementById('forwardBody');
    if(e.target.classList.contains('delete')) {
        if(confirm('Are you sure?')){
            var tr = e.target.parentElement.parentElement;
            tableBody.removeChild(tr);
        }
    }
}