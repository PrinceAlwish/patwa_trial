document.getElementById('lostItemForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Get form values
  const itemName = document.getElementById('itemName').value;
  const itemDescription = document.getElementById('itemDescription').value;
  const ownerName = document.getElementById('ownerName').value;
  const contactInfo = document.getElementById('contactInfo').value;
  
  // You can send this information to your backend or perform any necessary actions here
  // For demo purposes, let's just log the values
  console.log('Item Name:', itemName);
  console.log('Item Description:', itemDescription);
  console.log('Owner Name:', ownerName);
  console.log('Contact Information:', contactInfo);
  
  // Clear form fields after submission
  document.getElementById('itemName').value = '';
  document.getElementById('itemDescription').value = '';
  document.getElementById('ownerName').value = '';
  document.getElementById('contactInfo').value = '';
});
