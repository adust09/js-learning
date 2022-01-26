function escapeHtml(str) {
    if (!str) { return ''; }
    str = str.replace(/&/g, '&amp;');
    str = str.replace(/</g, '&lt;');
    str = str.replace(/>/g, '&gt;');
    str = str.replace(/"/g, '&quot;');
    str = str.replace(/'/g, '&#39;');
    return str;
}

function e(templates, ...value) {
    let result = '';
    for (let i = 0; len = template.length; i < len, i++) {
        result += template[i] + escapeHtml(value[i]);
    }
    return result;
}

let name = '<"Mario" & "Luigi">';
console.log(e`Hello ${name}!`);