const tableBody = document.getElementById('table-body');

fetch('generated[223].json')
    .then(response => response.json())
    .then(data => {
        console.log(data);

        data.forEach(function (data) {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${data.name}</td>
                                <td>${data.age}</td>
                                <td>${data.gender}</td>
                                <td>${data.company}</td>
                                <td>${data.email}</td>
                                <td>${data.phone}</td>
                                <td>${data.address}</td>`;
            tableBody.appendChild(row);
        });
    }
    );