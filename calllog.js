$(document).ready(function () {
  const callForm = $('#callForm');
  const callList = $('#callList');

  callForm.submit(function (e) {
    e.preventDefault();

    const caller = $('#caller').val();
    const phoneNumber = $('#phoneNumber').val();

    if (caller.trim() === '' || phoneNumber.trim() === '') {
      alert('Please enter both caller name and phone number.');
      return;
    }

    const callItem = $('<li class="list-group-item"></li>');
    callItem.html(`<strong>${caller}:</strong> ${phoneNumber}
                    <button class="btn btn-sm btn-info edit-btn">Edit</button>
                    <button class="btn btn-sm btn-danger delete-btn">Delete</button>`);
    callList.append(callItem);

    callForm.trigger('reset');
  });

  callList.on('click', '.edit-btn', function () {
    const listItem = $(this).closest('li');
    const callerName = listItem.find('strong').text().replace(':', '');
    const phoneNumber = listItem.contents().last().text().trim();
    
    const newCaller = prompt('Edit Caller Name:', callerName);
    const newPhoneNumber = prompt('Edit Phone Number:', phoneNumber);

    if (newCaller !== null && newPhoneNumber !== null) {
      listItem.html(`<strong>${newCaller}:</strong> ${newPhoneNumber}
                     <button class="btn btn-sm btn-info edit-btn">Edit</button>
                     <button class="btn btn-sm btn-danger delete-btn">Delete</button>`);
    }
  });

  callList.on('click', '.delete-btn', function () {
    $(this).closest('li').remove();
  });
});
