function openTab(tabName) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.classList.remove('active');
    });

    document.getElementById(tabName).classList.add('active');
}

// Initially open the first tab
document.getElementById('weekly-report').classList.add('active');


