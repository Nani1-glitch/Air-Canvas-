document.addEventListener('DOMContentLoaded', (event) => {
    const colorPicker = document.getElementById('color-picker');
    const clearBtn = document.getElementById('clear-btn');

    colorPicker.addEventListener('input', (event) => {
        const color = event.target.value;
        fetch('/change_color', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ color })
        });
    });

    clearBtn.addEventListener('click', (event) => {
        fetch('/clear_canvas', {
            method: 'POST'
        });
    });
});
