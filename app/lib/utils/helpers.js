
export const formatearFecha = fecha => {
    const fechaNueva = new Date(fecha);

    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }

    return fechaNueva.toLocaleDateString('es-MX', opciones);
}

export const formatearCantidad = cantidad => {
    const cantidadNumero = Number(cantidad);

    return cantidadNumero.toLocaleString('es-MX', {
        currency: 'MXN',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
}