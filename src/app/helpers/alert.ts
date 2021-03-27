import Swal, { SweetAlertIcon } from 'sweetalert2';

// Crear alerta informativa
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
});

// Mostrar mensaje según sea la necesidad
const showMessage = (icon: SweetAlertIcon, title: string) =>
  Toast.fire({
    icon,
    title,
  });

// Preguntar al usuario antes de realizar una acción
const showConfirmation = (title: string, text: string) =>
  Swal.fire({
    title,
    text,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'No',
    confirmButtonText: 'Si',
  });

export { showMessage, showConfirmation };
