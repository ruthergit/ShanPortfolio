const mediaQueryString = '(max-width: 775px) and (max-height: 900px)';
const mediaQueryList = window.matchMedia(mediaQueryString);

const item3 = document.getElementById('item3');
const item4 = document.getElementById('item4');

function handleMediaQueryChangeItems(event) {
    
}

handleMediaQueryChangeItems(mediaQueryList);
mediaQueryList.addListener(handleMediaQueryChangeItems);

const mediaQuery = window.matchMedia("(max-width: 775px)");

const applyFiltersAndListeners = (contentDiv) => {
    const firstDiv = contentDiv.querySelector('div:first-child');
    const secondChild = contentDiv.querySelector('div:nth-child(2)');
    const lastDiv = contentDiv.querySelector('div:last-child');

    const addFilter = (element) => {
        element.style.filter = 'brightness(0.6)';
    };
    addFilter(firstDiv);
    addFilter(lastDiv);

    const handleMouse = (element, isOver) => {
        element.style.filter = isOver ? 'brightness(1)' : 'brightness(0.6)';
    };

    firstDiv.addEventListener('mouseover', () => {
        handleMouse(firstDiv, true);
        handleMouse(secondChild, false);
        contentDiv.style.transform = 'translate(6.7rem)';
    });
    firstDiv.addEventListener('mouseout', () => {
        handleMouse(firstDiv, false);
        handleMouse(secondChild, true);
        contentDiv.style.transform = 'none';
    });

    lastDiv.addEventListener('mouseover', () => {
        handleMouse(lastDiv, true);
        handleMouse(secondChild, false);
        contentDiv.style.transform = 'translate(-6.7rem)';
    });
    lastDiv.addEventListener('mouseout', () => {
        handleMouse(lastDiv, false);
        handleMouse(secondChild, true);
        contentDiv.style.transform = 'none';
    });
};

const removeFiltersAndListeners = (contentDiv) => {
    const firstDiv = contentDiv.querySelector('div:first-child');
    const lastDiv = contentDiv.querySelector('div:last-child');

    firstDiv.style.filter = '';
    lastDiv.style.filter = '';
    contentDiv.style.transform = 'none';

    const cloneFirstDiv = firstDiv.cloneNode(true);
    const cloneLastDiv = lastDiv.cloneNode(true);

    firstDiv.parentNode.replaceChild(cloneFirstDiv, firstDiv);
    lastDiv.parentNode.replaceChild(cloneLastDiv, lastDiv);
};

const handleMediaQueryChangeFilters = (event) => {
    if (event.matches) {
        removeFiltersAndListeners(item3.querySelector('.content'));
        removeFiltersAndListeners(item4.querySelector('.content'));
    } else {
        applyFiltersAndListeners(item3.querySelector('.content'));
        applyFiltersAndListeners(item4.querySelector('.content'));
    }
};

handleMediaQueryChangeFilters(mediaQuery);
mediaQuery.addListener(handleMediaQueryChangeFilters);
