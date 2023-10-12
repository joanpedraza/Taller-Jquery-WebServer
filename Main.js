$(document).ready(function() {
    $('#myTable').DataTable( {
        ajax: {
            url: 'https://jsonplaceholder.typicode.com/users',
            dataSrc: ''
        },
        columns: [
            { data: 'id' },
            { data: 'name' },
            { data: 'username' },
            { data: 'email' },
            { data: 'address.street' },
            { data: 'address.suite' },
            { data: 'address.city' },
            { data: 'address.zipcode' },
            { data: 'address.geo.lat' },
            { data: 'address.geo.lng' }
        ]
    } );
} );