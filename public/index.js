const root = document.body;

const config = {
    menu: {
        buttonButton: {
            text: 'Показать волшебное окошко',
            style: {
                padding: '10px 20px',
                cursor: 'pointer'
            },
            event: {
                click: 'showSections'
            }
        }
    },
    show: {
        divShow: {
            style: {
                opacity: 0,
                marginTop: '20px',
                padding: '10px',
                border: '1px solid black',
                backgroundColor: '#f4f4f4'
            },
            sectionName: {
                divNone1: {
                    pNone1: {
                        text: 'text-1.1'
                    },
                    pNone2: {
                        text: 'text-1.2'
                    }
                },
                divNone2: {
                    pNone1: {
                        text: 'text-2.1'
                    },
                    pNone2: {
                        text: 'text-2.2'
                    }
                }
            },
            sectionNone1: {
                divNone1: {
                    pNone1: {
                        text: 'text-3.1'
                    },
                    pNone2: {
                        text: 'text-3.2'
                    }
                }
            },
            sectionNone2: {
                divGo: {
                    pNone1: {
                        text: 'text-4.1'
                    },
                    pNone2: {
                        text: 'text-4.2'
                    }
                }
            }
        }
    }
};

const REGEX_PATTERNS = {
    ELEMENTS: /^(div|section|button|p)(\w+)/
};

function createElements(config, parent) {
    for (const key in config) {
        if (config.hasOwnProperty(key)) {
            const matches = key.match(REGEX_PATTERNS.ELEMENTS);

            if (matches) {
                const [fullMatch, tag, id] = matches;

                const element = document.createElement(tag);

                if (!id.startsWith('None')) {
                    element.id=id
                }

                const settings = config[key];
                let flag=false;
                for (const property in settings) {
                    if (settings.hasOwnProperty(property)) {
                        switch (property) {
                            case 'text':
                                element.textContent = settings[property];
                                break;
                            case 'style':
                                Object.assign(element.style, settings[property]);
                                break;
                            case 'event':
                                for (const eventType in settings[property]) {
                                    if (settings[property].hasOwnProperty(eventType)) {
                                        element.addEventListener(eventType, window[settings[property][eventType]]);
                                    }
                                }
                                break;
                            case 'class':
                                element.className = settings[property];
                                break;
                            default:
                                flag = true
                        }
                    }
                }
                if (flag) {
                    createElements(settings, element);
                }
                parent.appendChild(element);
            }
        }
    }
}

// Запуск создания элементов
createElements(config.menu, root);

createElements(config.show, root);

function showSections() {
    const modal = document.getElementById('Show')
    modal.style.opacity = '1';
}
