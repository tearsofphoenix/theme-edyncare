// sidebar nav links
export default {
    category1: [
        {
            "menu_title": "sidebar.dashboard",
            "menu_icon": "ti-dashboard",
            "path": "/horizontal/dashboard",
            "child_routes": null
        },
        {
            "menu_title": "sidebar.widgets",
            "menu_icon": "ti-widget",
            "child_routes": [
                {
                    "path": "/horizontal/widgets/user",
                    "menu_title": "sidebar.user"
                },
                {
                    "path": "/horizontal/widgets/miscellaneous",
                    "menu_title": "sidebar.miscellaneous"
                },
                {
                    "path": "/horizontal/widgets/charts",
                    "menu_title": "sidebar.charts"
                },
                {
                    "path": "/horizontal/widgets/promo",
                    "menu_title": "sidebar.promo"
                }
            ]
        },
        {
            "menu_title": "sidebar.ecommerce",
            "menu_icon": "ti-shopping-cart",
            "child_routes": [
                {
                    "path": "/horizontal/ecommerce/shop-list",
                    "menu_title": "sidebar.shopList"
                },
                {
                    "path": "/horizontal/ecommerce/shop-grid",
                    "menu_title": "sidebar.shopGrid"
                },
                {
                    "path": "/horizontal/ecommerce/invoice",
                    "menu_title": "sidebar.invoice"
                }
            ]
        },
        {
            "menu_title": "sidebar.pages",
            "menu_icon": "ti-layers",
            "child_routes": [
                {
                    "path": "/horizontal/pages/gallery",
                    "menu_title": "sidebar.gallery"
                },
                {
                    "path": "/horizontal/pages/pricing",
                    "menu_title": "sidebar.pricing"
                },
                {
                    "path": "/horizontal/pages/blank",
                    "menu_title": "sidebar.blank"
                },
                {
                    "path": "/terms-condition",
                    "menu_title": "sidebar.terms&Conditions"
                },
                {
                    "path": "/horizontal/pages/feedback",
                    "menu_title": "sidebar.feedback"
                },
                {
                    "path": "/horizontal/pages/report",
                    "menu_title": "sidebar.report"
                },
                {
                    "path": "/horizontal/pages/faq",
                    "menu_title": "sidebar.faq(s)"
                }
            ]
        },
        {
            "menu_title": "sidebar.session",
            "menu_icon": "ti-timer",
            "child_routes": [
                {
                    "path": "/session/login",
                    "menu_title": "sidebar.login"
                },
                {
                    "path": "/session/register",
                    "menu_title": "sidebar.register"
                },
                {
                    "path": "/session/lock-screen",
                    "menu_title": "sidebar.lockScreen"
                },
                {
                    "path": "/session/forgot-password",
                    "menu_title": "sidebar.forgotPassword"
                },
                {
                    "path": "/session/404",
                    "menu_title": "sidebar.404"
                },
                {
                    "path": "/session/500",
                    "menu_title": "sidebar.500"
                }
            ]
        }
    ],
    category2: [
        {
            "menu_title": "sidebar.inbox",
            "menu_icon": "ti-archive",
            "path": "/horizontal/mail",
            "child_routes": null
        },
        {
            "menu_title": "sidebar.chat",
            "menu_icon": "ti-comment",
            "path": "/horizontal/chat",
            "child_routes": null
        },
        {
            "menu_title": "sidebar.toDo",
            "menu_icon": "ti-comment-alt",
            "path": "/horizontal/todo",
            "child_routes": null
        }
    ],
    category3: [
        {
            "menu_title": "sidebar.uiComponents",
            "menu_icon": "ti-ruler-alt-2",
            "child_routes": [
                {
                    "path": "/horizontal/ui-components/alerts",
                    "menu_title": "sidebar.alerts"
                },
                {
                    "path": "/horizontal/ui-components/app-bar",
                    "menu_title": "sidebar.appBar"
                },
                {
                    "path": "/horizontal/ui-components/avatars",
                    "menu_title": "sidebar.avatars"
                },
                {
                    "path": "/horizontal/ui-components/buttons",
                    "menu_title": "sidebar.buttons"
                },
                {
                    "path": "/horizontal/ui-components/bottom-navigations",
                    "menu_title": "sidebar.bottomNavigations"
                },
                {
                    "path": "/horizontal/ui-components/badges",
                    "menu_title": "sidebar.badges"
                },
                {
                    "path": "/horizontal/ui-components/cards",
                    "menu_title": "sidebar.cards"
                },
                {
                    "path": "/horizontal/ui-components/cards-masonary",
                    "menu_title": "sidebar.cardsMasonry"
                },
                {
                    "path": "/horizontal/ui-components/chip",
                    "menu_title": "sidebar.chip"
                },
                {
                    "path": "/horizontal/ui-components/dialog",
                    "menu_title": "sidebar.dialog"
                },
                {
                    "path": "/horizontal/ui-components/dividers",
                    "menu_title": "sidebar.dividers"
                },
                {
                    "path": "/horizontal/ui-components/drawers",
                    "menu_title": "sidebar.drawers"
                },
                {
                    "path": "/horizontal/ui-components/expansion-panel",
                    "menu_title": "sidebar.expansionPanel"
                },
                {
                    "path": "/horizontal/ui-components/grid-list",
                    "menu_title": "sidebar.gridList"
                },
                {
                    "path": "/horizontal/ui-components/list",
                    "menu_title": "sidebar.list"
                },
                {
                    "path": "/horizontal/ui-components/menu",
                    "menu_title": "sidebar.menu"
                },
                {
                    "path": "/horizontal/ui-components/popover",
                    "menu_title": "sidebar.popoverAndToolTip"
                },
                {
                    "path": "/horizontal/ui-components/progress",
                    "menu_title": "sidebar.progress"
                },
                {
                    "path": "/horizontal/ui-components/snackbar",
                    "menu_title": "sidebar.snackbar"
                },
                {
                    "path": "/horizontal/ui-components/selection-controls",
                    "menu_title": "sidebar.selectionControls"
                }
            ]
        },
        {
            "menu_title": "sidebar.advancedComponent",
            "menu_icon": "ti-ruler-pencil",
            "child_routes": [
                {
                    "path": "/horizontal/advanced-component/dateTime-picker",
                    "menu_title": "sidebar.dateAndTimePicker"
                },
                {
                    "path": "/horizontal/advanced-component/tabs",
                    "menu_title": "sidebar.tabs"
                },
                {
                    "path": "/horizontal/advanced-component/stepper",
                    "menu_title": "sidebar.stepper"
                },
                {
                    "path": "/horizontal/advanced-component/notification",
                    "menu_title": "sidebar.notification"
                },
                {
                    "path": "/horizontal/advanced-component/sweet-alert",
                    "menu_title": "sidebar.sweetAlert"
                },
                {
                    "path": "/horizontal/advanced-component/auto-complete",
                    "menu_title": "sidebar.autoComplete"
                }
            ]
        },
        {
            "menu_title": "sidebar.aboutUs",
            "menu_icon": "ti-info-alt",
            "path": "/horizontal/about-us",
            "child_routes": null
        }
    ],
    category4: [
        {
            "menu_title": "sidebar.forms",
            "menu_icon": "ti-menu-alt",
            "child_routes": [
                {
                    "path": "/horizontal/forms/form-elements",
                    "menu_title": "sidebar.formElements"
                },
                {
                    "path": "/horizontal/forms/text-field",
                    "menu_title": "sidebar.textField"
                },
                {
                    "path": "/horizontal/forms/select-list",
                    "menu_title": "sidebar.selectList"
                }
            ]
        },
        {
            "menu_title": "sidebar.charts",
            "menu_icon": "ti-pie-chart",
            "child_routes": [
                {
                    "path": "/horizontal/charts/re-charts",
                    "menu_title": "sidebar.reCharts"
                },
                {
                    "path": "/horizontal/charts/react-chartjs2",
                    "menu_title": "sidebar.reactChartjs2"
                }
            ]
        },
        {
            "menu_title": "sidebar.icons",
            "menu_icon": "ti-star",
            "child_routes": [
                {
                    "path": "/horizontal/icons/themify-icons",
                    "menu_title": "sidebar.themifyIcons"
                },
                {
                    "path": "/horizontal/icons/simple-lineIcons",
                    "menu_title": "sidebar.simpleLineIcons"
                },
                {
                    "path": "/horizontal/icons/font-awesome",
                    "menu_title": "sidebar.fontAwesome"
                },
                {
                    "path": "/horizontal/icons/material-icons",
                    "menu_title": "sidebar.materialIcons"
                }
            ]
        },
        {
            "menu_title": "sidebar.tables",
            "menu_icon": "ti-layout",
            "child_routes": [
                {
                    "path": "/horizontal/tables/basic",
                    "menu_title": "sidebar.basic"
                },
                {
                    "path": "/horizontal/tables/data-table",
                    "menu_title": "sidebar.dataTable"
                },
                {
                    "path": "/horizontal/tables/responsive",
                    "menu_title": "sidebar.responsive"
                },
                {
                    "path": "/horizontal/tables/react-table",
                    "menu_title": "sidebar.reactTable"
                }
            ]
        }
    ],
    category5: [
        {
            "menu_title": "sidebar.maps",
            "menu_icon": "ti-map-alt",
            "child_routes": [
                {
                    "path": "/horizontal/maps/google-maps",
                    "menu_title": "sidebar.googleMaps"
                },
                {
                    "path": "/horizontal/maps/leaflet-maps",
                    "menu_title": "sidebar.leafletMaps"
                }
            ]
        },
        {
            "menu_title": "sidebar.users",
            "menu_icon": "ti-user",
            "child_routes": [
                {
                    "path": "/horizontal/users/user-profile-1",
                    "menu_title": "sidebar.userProfile1"
                },
                {
                    "path": "/horizontal/users/user-profile",
                    "menu_title": "sidebar.userProfile2"
                },
                {
                    "path": "/horizontal/users/user-management",
                    "menu_title": "sidebar.userManagement"
                },
                {
                    "path": "/horizontal/users/user-list",
                    "menu_title": "sidebar.userList"
                }
            ]
        },
        {
            "menu_title": "sidebar.calendar",
            "menu_icon": "ti-calendar",
            "child_routes": [
                {
                    "path": "/horizontal/calendar/basic",
                    "menu_title": "components.basic"
                },
                {
                    "path": "/horizontal/calendar/cultures",
                    "menu_title": "sidebar.cultures"
                },
                {
                    "path": "/horizontal/calendar/dnd",
                    "menu_title": "sidebar.dnd"
                },
                {
                    "path": "/horizontal/calendar/selectable",
                    "menu_title": "sidebar.selectable"
                },
                {
                    "path": "/horizontal/calendar/custom-rendering",
                    "menu_title": "sidebar.customRendering"
                }
            ]
        },
        {
            "menu_title": "sidebar.editor",
            "menu_icon": "ti-pencil-alt",
            "child_routes": [
                {
                    "path": "/horizontal/editor/wysiwyg-editor",
                    "menu_title": "sidebar.wysiwygEditor"
                },
                {
                    "path": "/horizontal/editor/quill-editor",
                    "menu_title": "sidebar.quillEditor"
                }
            ]
        },
        {
            "menu_title": "sidebar.dragAndDrop",
            "menu_icon": "ti-mouse-alt",
            "child_routes": [
                {
                    "path": "/horizontal/drag-andDrop/react-dragula",
                    "menu_title": "sidebar.reactDragula"
                },
                {
                    "path": "/horizontal/drag-andDrop/react-dnd",
                    "menu_title": "sidebar.reactDnd"
                }
            ]
        }
    ]
}
