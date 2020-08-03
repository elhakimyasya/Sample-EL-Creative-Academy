var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	return new bootstrap.Tooltip(tooltipTriggerEl)
})

var daftarAkun = document.getElementById('daftarAkun');
var modalDaftarAkun = new bootstrap.Modal(document.getElementById('modalDaftarAkun'), {
	keyboard: false
})
daftarAkun.addEventListener('click', function () {
	modalDaftarAkun.toggle();
})