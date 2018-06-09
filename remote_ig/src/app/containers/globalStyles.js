import red from 'material-ui/colors/red';
import Hidden from 'material-ui';

const drawerWidth = window.outerWidth <= 600 ? 300 : (window.outerWidth / 3);
const solidBlue = '#00AFFF';
const solidGreen = '#7DC832';
const midGrey = '#B2B2B2';
const midGreen = '#B1DE84';
const solidGrey = '#808080';
const midBlue= '#66CFFF';
const lightGrey = '#F2F2F2';
const disabledGrey= '#b2b2b2';
const errorColor='#f44336';
const lightBlue='#ccefff';
const lightGreen='#e5f4d6';
const dataColor='#000000de';
const secondaryColor= '#0000008a';
const selectPrimary= '#00000014';
const selectSecondary= '#00000091';
const fourthGrey= '#E5E5E5';
const blueOne    = '#00AFFF';
const blueTwo    = '#32BFFF';
const blueThree  = '#66CFFF';
const blueFour   = '#66CFFF';
const blueFive   = '#99DFFF';
const greenOne   = '#7DC832';
const greenTwo   = '#97D35A';
const greenThree = '#B1DE84';
const greenFour  = '#CBE9AD';
const greenFive  = '#E5F4D6';
const greyOne    = '#808080';
const greyTwo    = '#999999';
const greyThree  = '#B2B2B2';
const greyFour   = '#CCCCCC';
const greyFive   = '#E5E5E5';
const greySix    = '#BFBFBF';
const greySeven  = '#CBCBCB';
const greyEight  = '#D8D8D8';
const greyNine   = '#E5E5E5';
const greyTen    = '#F2F2F2';

const globalStyles = theme => ({
    root: {
        width: '100%',
        height: '100%',
        zIndex: 1,
        overflow: 'hidden',
        'min-width': '300px',
        '-webkit-tap-highlight-color': 'transparent',
        fontFamily: 'Roboto, sans-sarif',
    },
    appFrame: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100%',
        /* css for header logo column alignment */
        "& > header":{
            padding:'0 10px',
            "& > div":{
                "& > $logoButton":{
                    padding:'0',
                    flex:4,
                    justifyContent:'flex-start'
                },
                "& > div":{
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    flex:'1',
                    margin:'0 2px 0 0',
                    "@media (min-width: 960px)":{
                        justifyContent:'flex-end'
                    },
                    "& $dashContainer":{
                        padding:'0',

                    }
                }
            }
        }
    },
    appBar: {
        position: 'absolute',
        color: solidGrey,
        display:'flex',
        height:60,
        backgroundColor: '#F7F7F7',
        zIndex: theme.zIndex.navDrawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    setDefaultSecondary: {
        color: secondaryColor
    },
    setGreenRight: {
        color: greenOne,
        textAlign: 'right',
        fontSize:'1.2rem'
    },
    setGreenLeft: {
        color: greenOne,
        textAlign: 'left',
        fontSize:'1.2rem',
        width:"100%"
    },
    smallAvatar: {
        height: 30,
        width: 30
    },
    mediumAvatar: {
        height: 50,
        width: 50
    },
    bigAvatar: {
        width: 60,
        height: 60,
    },
    appBarShift: {
        marginLeft: `calc(33%)`,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    hide: {
        // display: 'none',
        visibility:'hidden'
    },
    drawerPaper: {
        position: 'relative',
        height: '100%',
        width: drawerWidth,
        maxWidth: drawerWidth,
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        width: 60,
        color: 'red',
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    drawerInner: {
        backgroundColor: '#FFFFFF',
        width: drawerWidth,
        fontSize: '1.6rem'
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        border: 'none',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        width: '100%',
        flexGrow: 1,
        backgroundColor: 'transparent',
        border: 'none',
        marginTop: 74
    },
    header: {
        flex: 1,
        marginTop: '0.5em',
        display: 'flex',
        'align-items': 'center'
    },
    inputFormLabel: {
        fontSize: '1.6rem',
        marginTop:'10px',
    },
    inputSearchPad: {
        width: '100%',
        flex: 4
    },
    headerItem: {
        padding: '0 0.5em',
        display: 'inline-block',
        color: solidGrey,
        textTransform: 'none',
        fontSize: '1.6rem',
        fontWeight: '400',
        cursor: 'pointer'
    },
    headerItemSelected: {
        padding: '0 0.5em',
        display: 'inline-block',
        color: solidGrey,
        textTransform: 'none',
        fontSize: '1.6rem',
        fontWeight: '500',
        cursor: 'pointer'
    },
    showPointer: {
        cursor: 'pointer',
        fontSize:'1.4rem'
    },
    paper: {
        padding: 16,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    profile: {
        color: solidBlue,
        padding: 0
    },
    button: {
        'min-width': 0
    },
    logoButton: {
        minWidth: 0,
        padding: '0 12px 0 0',
        fontSize:'1.4rem',
        "&:hover":{
            backgroundColor:'transparent'
        },
        "&:focus":{
            backgroundColor:'transparent'
        }
    },
    logoButtonSm: {
        minWidth: 0,
        padding: '0 12px',
        fontSize:'1.4rem'

    },
    menuButton: {
        color: solidBlue
    },
    logoImg: {
        top: '0',
        padding: '0',
        width: '14.5em'
    },
    logoImgSmall: {
        top: '0',
        padding: '5px 0',
        width: '60px'
    },
    tagline: {
        position: 'absolute',
        top: '3.5em',
        left: '1em',
        fontWeight: '700'
    },
    leftPanelHeader: {
        padding: '1em'
    },
    headerNav: {
        display: 'inline-block',
        fontSize: '1.6rem'
    },
    headerNavOuter: {
        display: 'inline-block',
        padding: '0 1em',
        fontSize: '1.6rem'

    },
    tempAssessees: {
        textAlign: 'left',
        alignItems: 'center',
        padding: '8px',
        backgroundColor: 'rgba(209, 211, 212, 0.27)',
        color: theme.palette.text.secondary
    },
    cardMainContainer: {
        display: 'flex',
        width: '100%',
        margin: '5px 0'
    },
    cardMainContainerMid: {
        display: 'flex',
        padding: '0px 5px 0 5px',
        height:'50px',
        margin: '5px 0 0px 0',
        //boxShadow:'0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
        //overflow:'hidden',
        '&:first-child':{
            marginTop:'0px'
        }
    },
    cardMainContainerMidSelection:{
        "& > div  div":{
            padding:'0px'
        },


    },
    cardMainContainerMidFilter: {
        display: 'flex',
        padding: '0px 5px 0 0',
        height:'50px'
    },
    SMainContainer: {
        display: 'flex',
        margin: '0 0 0px',
        padding: '0 10px 10px',
        border: '1px solid',
        borderColor:'transparent',
        borderTop:'0',
        "& label": {
            fontSize: '1.6rem',
        },
        /* Styling for scan popup temporary commented */
        /*"& label":{
            fontSize:'1.6rem',
            "&[class*='focused']":{
                fontSize:'1.2rem',
                transform: 'translate(0, 1.5px) scale(1)'
            }
        },
        "& > div > div":{
            marginTop:'10px',
            marginBottom:'0px'
        },
        "& > div > div > div":{
            "&:after":{
                backgroundColor:solidGrey
            }
        },*/
        "& input":{
            fontSize:'1.6rem',
            color: solidGrey
        }
    },

    superScriptDiv:{
        position:'relative',
        bottom:'5px'
    },
    fixToLength: {
        color: theme.palette.text.secondary,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
    },
    cardHeaderContainer: {
        display: 'flex',
        width: '100%',
        margin: ' 0 0'
    },
    supSearch: {
        fontSize: '1.6rem'
    },
    cardSelectContainer: {
        height: '1em',
        display: 'flex',
        alignItems: 'flex-start',
        paddingLeft: '1em'
    },
    labelOptions: {
        display: 'flex',
        alignItems: 'center'
    },
    smCardSelectContainer: {
        height: '1em',
        display: 'flex',
        alignItems: 'flex-start'
    },
    smCardBoxContainer: {
        width: '95%',
        margin: '0 8px',
        height: '70px',
        display: 'flex'

    },
    smCheckSelectContainer: {
        margin: '0 0 0 -4px',
    },
    measureCardSelectContainer: {
        display: 'flex',
        width: '100%'
    },
    userCardContentContainer: {
        flex: 11,
        height:'50px'
    },
    smUserCardContentContainer: {
        flex: 11,
        marginRight: 8,
        marginBottom: '0'
    },
    assesseesContainer: {
        display: 'flex',
        padding: '0 10px 0 12px',
        alignItems: 'center',
        backgroundColor: solidBlue,
        height:'50px',
        borderRadius:0
    },
    expandIconContainer: {
        width: 50,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: solidBlue
    },
    dossierContainer: {
        margin: '10px 5px'
    },
    dossierContainerLeft: {
        margin: '10px 5px'
    },
    cardContentContainer: {
        flex: 11
    },
    userCheckBoxAdd: {
        left: '-20px'
    },
    checkBoxCard: {
        color: solidBlue,
        bottom: '0.6em',
    },
    checkBoxCardAssessee: {
        color: solidBlue,
        bottom: '0.1em'
    },
    measureBox: {
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        padding: '0px 0px',
        cursor: 'pointer',
        color: theme.palette.text.secondary
    },
    iconBox: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    iconBoxFooter: {
        display: 'flex',
        flex: 1,
        paddingTop: 4,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'column'
    },
    authIconBox: {
        display: 'flex',
        flex: 1,
        paddingTop: 4,
        alignItems: 'flex-end',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    measureBoxCenter: {
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        padding: '10px',
        color: theme.palette.text.secondary
    },
    smMeasureBoxCenter: {
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        padding: '10px',
        color: theme.palette.text.secondary
    },
    measureBoxRight: {
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        padding: '10px',
        color: theme.palette.text.secondary
    },
    mb1: {
        display: 'inline-block',
        flex: 1,
        backgroundColor: solidBlue,
        color: '#fff'
    },
    mb2: {
        display: 'inline-block',
        flex: 4,
        backgroundColor: solidGreen,
        color: '#fff'
    },
    mb3: {
        display: 'inline-block',
        flex: 1,
        backgroundColor: solidBlue,
        color: '#fff'
    },
    mb4: {
        display: 'inline-block',
        flex: 1,
        backgroundColor: solidGreen,
        color: '#fff'
    },
    mb1g: {
        display: 'inline-block',
        flex: 1,
        textAlign:'center',
        backgroundColor: solidGreen,
        height:30,
        justifyContent:'center',
        color: '#fff'
    },
    mb1b: {
        display: 'inline-block',
        flex: 1,
        backgroundColor: solidBlue,
        textAlign:'center',
        height:30,
        justifyContent:'center',
        color: '#fff'
    },
    cardPic: {
        display: 'inline-flex',
        flex: 1,
        justifyContent: 'center'
    },
    measureCardText:{
        margin:'5px'
    },

    cardContentMidPanel: {
        display: 'inline-block',
        flex: 4,
        textAlign: 'left',
        fontSize: '1.6rem',
        overflow:'hidden'
    },
    textOverflow:{
        whiteSpace:'nowrap',
        overflow:'hidden',
        textOverflow:'ellipsis'
    },

    cardContent: {
        display: 'inline-block',
        flex: 2,
        textAlign: 'left',
        fontSize: '1.6rem',
    },
    cardExpand: {
        display: 'inline-block',
        flex: 1,
    },
    dashContainer: {
        padding: '0 12px',
        display: 'flex',
        position: 'relative',
        alignItems: 'center'
    },
    dashboardCard:{
        backgroundColor:lightGrey,
        display: 'flex',
        cursor: 'pointer',
        color:solidGrey,
        height:'50px'
    },
    dashboardOptions: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'rgba(0, 0, 0, 0.54)'
    },
    hr: {
        padding: '0 10px'
    },
    labelName: {
        float: 'right',
        paddingLeft: '0em',
        position: 'absolute',
        top: '4em',
        left: '-5em',
        width: '120px',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
    },
    dashboard: {
        display: 'flex',
        padding: '0px 5px',
        //cursor: 'pointer',
        color:solidGrey,
        height: 50,
        "& > div:first-child":{
            whiteSpace:'nowrap',
            textOverflow:'ellipsis',
            width:'100%',
            overflow:'hidden'

        }
    },
    dashboardProfileMid: {
        backgroundColor:'#fff',
        display: 'flex',
        padding: '0 5px 0 5px',
        cursor: 'pointer',
        color:solidGrey
    },
    fillRight: {
        flex: 4,
        flexDirection: 'column',
        color:dataColor,
        justifyContent: 'center',
        lineHeight:'2rem'
    },
    dashboardImage: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        padding:'0 5px 0 0',
        justifyContent: 'center'
    },
    emptyCircle: {
        borderRadius: '50%',
        height: '40px',
        width: '40px',
        display: 'flex',
        border: '1px black dotted'
    },
    searchHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '10px 0 0'
    },
    searchLabel: {
        flex: 2,
        display: 'flex',
        fontSize: '1.6rem',
        fontWeight: 500,
        color: 'rgba(0, 0, 0, 0.54)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchIcons: {
        flex: 4
    },
    labelHeader: {
        cursor: 'pointer',
        textAlign: 'right',
        padding: '0 1em',
        display: 'inline-block',
        color: solidGrey,
        textTransform: 'none',
        fontSize: '1.6rem',
        fontWeight: '400'
    },
    labelHeadEmail: {
        paddingLeft: '0em',
        top: '4em',
        left: '-5em',
        width: '120px',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
    },
    mainContainer: {
        display: 'flex',
        position: 'relative',
        bottom: 0
    },
    midPanelHeaderMiddle: {
        color: '#FFFFFF',
        fontWeight: 500,
        fontSize: '1.6rem',
        flex: '3',
        justifyContent: 'flex-start',
        alignItems: 'center',
        display: 'flex'
    },
    midPanelHeader: {
        color: '#FFFFFF',
        fontWeight: 500,
        fontSize: '1.6rem',
        flex: '4',
        justifyContent: 'flex-start',
        alignItems: 'center',
        display: 'flex',
        height:'50px'
    },
    moreTextPanelHeader: {
        color: '#FFFFFF',
        fontWeight: 500,
        fontSize: '1.6rem',
        flex: '4',
        justifyContent: 'flex-start',
        alignItems: 'center',
        display: 'flex'
    },
    iconBarNavRight:{
        float: 'right',
        display: 'flex',
        flex: 4
    },

    minLeftPanel: {
        margin: '0 1px'
    },
    expandContainer: {
        width: 48,
        padding: 0
    },
    headerBadge: {
        display: 'inline-block',
        borderRadius: 16,
        border: '1px solid',
        padding: '0 5px',
        position: 'relative',
        fontSize: '1rem',
        fontWeight: 500,
        bottom:1
    },
    headerBadge1_0: {
        display: 'inline-block',
        borderRadius: 16,
        border: '1px solid',
        padding: '1px 5px',
        position: 'relative',
        fontSize: '1.0rem',
        fontWeight: 500,
        bottom:1
    },
    assignmentReportBadge: {
        display: 'inline-block',
        borderRadius: 16,
        border: '1px solid ' + dataColor,
        padding: '0 5px',
        position: 'relative',
        bottom: 1,
        fontSize: '1.2rem',
        fontWeight: 400
    },
    assessmentSuitesBadge: {
        display: 'inline-block',
        borderRadius: 16,
        border: '1px solid ' + dataColor,
        padding: '0 5px',
        position: 'relative',
        bottom: 1,
        fontSize: '1.2rem',
        fontWeight: 400
    },
    leftPanel: {
        flex: 6,
        margin: '0 1px',
        "@media (min-width: 960px)":{
            maxWidth:'33.33%'
        }
    },
    middlePanel: {
        flex: 6,
        margin: '0 1px 0 0',
        "@media (min-width: 960px)":{
            maxWidth:'33.33%'
        }
    },
    rightPanel: {
        flex: 6,
        margin: '0 1px 0 0',
        "@media (min-width: 960px)":{
            maxWidth:'33.33%'
        }
    },
    scrollBarDiv: {
        height: '90%',
        display: 'grid',
    },
    scrollBarMiddleDiv: {},
    avatar: {
        backgroundColor: red[500],
        margin: 5
    },
    expand: {
        transform: 'rotate(90deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpenlg: {
        transform: 'rotate(270deg)',
    },
    expandOpensm: {
        transform: 'rotate(180deg)',
    },
    detailsMoreRight: {
        marginRight: '1.1em',
        marginLeft: '1.1em',
        paddingLeft: '0',
        paddingRight: '0'
    },
    greyBg: {
        backgroundColor: lightGrey
    },
    cardMiddleBox: {
        display: 'flex',
        flex: 6,
        border: '1px dashed black',
        borderLeft:'0'
    },
    cardMiddleCheckBox: {
        flex: 1
    },
    cardMiddleCheckBoxPopUp: {
        flex: 1,
        position: 'absolute',
        top: '0',
        right: '0'
    },
    cardMainBox: {
        display: 'flex',
        margin:'0 0 10px 0'
    },
    cardLeftBox: {
        flex: 6,
        border: '1px dashed black'
    },
    stubNavHeight: {
        height: 48
    },
    addDashed: {
        border: '1px dashed black'
    },
    cardRightBox: {
        flex: 6,
        border: '1px dashed black',
        borderLeft:'0'
    },
    detailsSection: {
        cursor: 'pointer',
        color: solidGrey,
        fontSize: '1.6rem',
        fontWeight: '500',
    },
    detailsSubSection: {
        padding: '0.5em',
        cursor: 'pointer',
        width: '100%',
        color: solidBlue,
        fontWeight: '500',

    },
    detailsSubContainers: {
        padding: '1em 1em 1em 2em',
        width: '100%'
    },
    FormBox: {
        padding: '0',
        display: 'flex',
        margin: '5px 0 0',
        fontSize:'1.6rem',
        height:'50px'
    },
    PopupFormBox: {
        margin: '5px 0 10px',
        minHeight:'65px',
        display: 'flex',
        alignItems:'center',
        flexDirection:'column',
        overflow:'hidden',
        "& label":{
            fontSize:'1.6rem'
        }
    },
    loginSpacer: {
        padding: '0'
    },
    PopupContainer: {
        padding: '0 1.6rem 1.6rem'
    },
    forgotBox:{
      marginBottom:'5px'
    },
    formControlReviewName: {
        fontSize: '1.6rem',
        width: '100%',
        flex:4,
        "& > div > div":{
            marginTop: '16px',
            marginBottom:'0px',
            width:'100%'
        }
    },
    formControlReviewTextMultiLine: {
        fontSize: '1.6rem',
        width: '100%',
        flex:4,
        "& > div":{
            height: '80px',
            overflow: 'hidden',
            marginTop: '16px',
            "& > div":{
                width:'100%',
                lineHeight:'2.2rem',
                maxHeight:'45px',
                "&:first-child":{
                    fontSize: '1.6rem',
                    paddingBottom:'0',
                    "& textarea":{

                    }
                },
                "&:last-child":{
                    fontSize: '1.6rem',
                    paddingTop:'0',
                    "& textarea":{

                    }
                }
            }
        },
    },
    inputFormText:{
        //lineHeight:'2.45rem',
        fontSize: '1.6rem',
        // height:'80px',

    },
    FormBoxNew:{
        height:'105px',
    },
    formControlReviewAlias: {
        fontSize: '1.6rem',
        width: '100%'
    },
    emptyIcon: {
        flex: 2
    },
    validationIcon: {
        flex: 2,
        textAlign: 'center  ',
        fontSize: '2rem',
        display:'flex'
    },
    familyRight: {
        flex: 1,
        textAlign: 'center  ',
        fontSize: '2rem',
    },
    setGrey: {
        color: solidGrey
    },
    fitParent: {
        width: '100%'
    },
    assesseesMenu: {
        padding: '0 0',
        textAlign: 'center'
    },
    dossierPopUpContent : {
        padding : 10
    },
    iconsFooterLabelLeft: {
        color: dataColor,
        background: 'transparent',
        fontSize: '1rem',
        padding: '6px 0 0 0'
    },
    iconsFooterLabelRight: {
        color: dataColor,
        fontSize: '1rem',
        padding: '6px 0 0 0'
    },
    iconsFooterLabelDefault: {
        color: dataColor,
        fontSize: '1rem',
        padding: '6px 0 0 0'
    },
    iconsFooterDefault: {
        color: dataColor,
        backgroundColor: 'transparent',
        boxSizing:'border-box',
    },
    unAvailable:{
        background:'#fff !important' ,
        color:secondaryColor,
        boxShadow:'0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12) !important',
        "& + label":{
            color:secondaryColor,
        },
        "&:hover":{
            background:'#fff' ,
            color:secondaryColor,
        },
    },
    noShadowDisabled:{
        background:'#fff !important' ,
        color:secondaryColor,
        // boxShadow:'0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12) !important',
        "& + label":{
            color:secondaryColor,
        },
        "&:hover":{
            background:'#fff' ,
            color:secondaryColor,
        },
    },
    openExpandedClass:{
        background: lightGrey,
        color:dataColor,
    },
    iconsFooterLeft: {
        color: lightGreen,
        backgroundColor: solidGreen,
        '&:hover': {
            background: midGreen
        }
    },
    iconsFooterLeftSelected: {
        color: lightGreen,
        background: midGreen
    },
    iconsFooterRight: {
        color: lightBlue,
        backgroundColor: solidBlue,
        '&:hover': {
            background: midBlue
        }
    },
    iconsFooterRightSelected: {
        color: solidBlue,
        background: midBlue
    },
    assesseesMenuItems: {
        cursor: 'pointer',
        fontSize: '1.6rem',
        textAlign: 'center',
        textTransform: 'lowercase',
        color: dataColor,
        width: '100%',
        fontWeight:'400',
        '&:hover': {
            background: selectPrimary
        }
    },
    assesseesMenuItemsBlue: {
        textAlign: 'center',
        cursor: 'pointer',
        fontSize: '1.6rem',
        textTransform: 'lowercase',
        color: solidGrey,
        width: '100%',
        fontWeight:'400',
        '&:hover': {
            background: selectPrimary
        },
        '&:focus': {
            background: selectPrimary
        },
        '&:active': {
            background: selectPrimary
        }
    },
    setLowerCase: {
        textTransform: 'lowercase',
        fontSize:'1.6rem',
        fontWeight:'400',

        width:'100%'
    },
    popCheckContent: {
        flex: 4,
        color: midGrey,
        textAlign: 'center'
    },
    DiagContainer: {
        alignItems: 'center',
        alignContent: 'center',
        padding: '0 0'
    },
    popContentContainer: {
        padding: '24px 0'
    },
    popActions: {
        justifyContent: 'space-around'
    },
    revertColor: {
        color: 'black'
    },
    userCardHeaderContainer: {
        flex: 11
    },
    cardContainer: {
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto'
    },
    rightPanelDivider: {
        backgroundColor: solidGrey,
        height: '0.1em',
        margin: '0 0 10px 0'
    },
    iconsBarDefault: {
        color: '#FFFFFF',
        fontSize: '2rem',
        cursor: 'pointer'
    },
    iconsBarNoBlue: {
        color: 'rgba(0, 0, 0, 0.54)',
        fontSize: '1.6rem',
        cursor: 'pointer'
    },
    topLabelFont: {
        fontSize: '1.4rem'
    },
    iconsBarSearch: {
        fontSize: '1.6rem',
        cursor: 'pointer'
    },
    detailsContactContainer: {
        width:'100%',
        "& > div":{
          margin:'5px 0 0 0'
        },
        // "& [class*='PhoneInput-input']":{
        //     marginTop:'16px',
        // },
    },
    detailsSubSectionTwo: {
        padding: '0.5em',
        cursor: 'pointer',
        width: '100%',
        color: solidGrey,
        fontWeight: '500',
        paddingTop: '1.3em',
        fontSize: '1.6rem',
        borderBottom:'1px solid lightGrey',
        backgroundColor:lightGrey
    },
    FormBoxContact: {
        display: 'flex',
        margin: '0.3em 0'
    },
    cardMainContainerRight: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between'

    },
    cardPicCredential: {
        position: 'relative',

    },
    FormBoxPic: {
        display: 'flex',
        margin: '0.5em 0 2em 0'
    },
    FormBoxSignature: {
        margin: '5px 0 0 0',
        height:'50px',
        "& > div > label":{
            top: 0,
            left: 0,
            position: 'initial',
            transform: 'none'
        },
        "& > div > div":{

        },
    },
    formControlStartDate: {
        flex: 2
    },
    cardExpandRight: {
        textAlign: 'center',
        display: 'inline-block',
        flex: 2,
        display:'flex'
    },
    iconBarNav: {
        float: 'right',
        display: 'flex',
        flex: 4
    },
    iconBarNavMiddle: {
        float: 'right',
        display: 'flex',
        flex: 4
    },
    iconBarNavMiddleLess: {
        float: 'right',
        display: 'flex',
        flex: 2
    },
    iconBarContainer: {
        display: 'flex'
    },
    profileMenus: {
        fontSize: '1.6rem'
    },
    profileDropdown: {
        fontSize: '1.6rem'
    },
    makeCenter: {
        alignItems: 'center',
        alignContent: 'center',
        textAlign: 'center',
        flexDirection: 'column'
    },
    rightPanelBox: {
        backgroundColor: '#ddd',
    },
    fixedDim: {
        width: 300,
        overflow:'auto',
        '@media (max-width: 360px)':{
            width:'calc( 100vw - 64px )'
        }

    },
    searchDialog:{
        width: 300,
        overflow:'auto',
        padding:'0px',
        boxSizing:'border-box',
        '@media (max-width: 360px)':{
            width:'calc( 100vw - 64px )'
        }
    },
    fixed10PadDim: {
        minWidth: 255,
        boxSizing:'border-box',
    },
    popupHeader: {
        padding: '0',
        textAlign: 'right',
        color: 'inherit',
        borderRadius:'0'
    },
    popUpTitleContainer: {
        backgroundColor: midGreen
    },
    popUpTitleContainerParent: {
        display: 'flex',
        justifyContent: 'flex-end',
        backgroundColor: solidBlue,
        height:'50px'
    },
    popUpTitleContainerParentDossier:{
        display: 'flex',
        justifyContent: 'flex-end',
        backgroundColor:solidGreen,
        height:'50px'
    },
    popUpTitleContainerCenter:{
        backgroundColor: midBlue
    },
    unitFlex: {
        flex: 1,
        display:'flex',
        justifyContent:"center"
    },
    popUpTitle: {
        padding: '10px 5px',
        color: '#000'
    },
    iconsPopupDefault: {
        color: '#fff',
        fontSize: '2rem',
        cursor: 'pointer'
    },
    cardIcons:{
        width:'20px',
        height:'20px',
        padding:'5px',
        margin:'10px'
    },
    filterHeader: {
        padding: '0px 5px !important',
        backgroundColor:lightGrey,
        height:'50px',
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-start'
    },
    StubHeader: {
        padding: '1em 0',
        textAlign: 'center'
    },
    cardIconsBox:{
        width:'50px',
        height:'50px',
        justifyContent:'center',
        display:'inline-block'
    },
    profileAvatar:{
        width:'40px',
        height:'40px',
        margin:'0 5px 4px 5px',
        cursor:'pointer'
    },
    profileAvatarRight:{
        width:'40px',
        height:'40px',
        margin:'0 5px 10px 5px',
        cursor:'pointer',
    },
    profileAvatarLeft:{
        width:'40px',
        height:'40px',
    },
    dossierCard:{
        margin:'10px',
        backgroundColor:lightGrey,
        display:'flex'
    },
    dossierFormBox:{
        flex:4
    },
    dossierBg:{
        backgroundColor:'#fff',
        padding: '0 5px 0 5px',
        color: dataColor,
        fontSize: '1.6rem',
        height:'50px',
        fontWeight:'400',
        minHeight:'initial',
        marginTop:'5px'
    },
    authHelperText:{
        fontSize:'1.2rem'
    },
    helperText:{
        fontSize:'1.2rem',
        color:errorColor,
        width:"100%"
    },
    accordionDetails:{
        padding:'0 5px'
    },
    formContainer:{
        flex: 4
    },
    inputGroup:{
        flex:4,
        display:'grid',
        height: 50
    },
    labelInput:{
        fontSize:'1.2rem',
        transform: 'translate(0, 1.5px) scale(1)'
    },
    mT5:{
        marginTop:'5px'
    },
    inputText:{
        fontSize:'1.6rem',
        display:'grid'
    },
    dossierImage: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    sectionContainer: {
        padding: '0 0 10px 0'
    },
    dossierPaper:{
        backgroundColor:'#fff',
        height:'105px',
        borderBottom:'1px solid #ddd',
        boxSizing:'border-box'
    },
    sortIput:{
        fontSize:'1.6rem'
    },
    assesseesContainerGreen: {
        display: 'flex',
        padding: '0 10px 0 12px',
        alignItems: 'center',
        backgroundColor: solidGreen,
        height:'50px',
        borderRadius:0
    },
    phoneInput:{
        margin:'0px'
    },
    aliasName:{
        fontSize:'1.2rem',
        color:secondaryColor
    },
    cardButton:{
        display:'block',
        textAlign:'left',
        alignItems:'flex-start',
        textTransform:'capitalize',
        fontWeight:'400',
        color:solidGrey,
        fontSize:'1.6rem',
        width:'100%',
        padding:'0 5px',
        height:50,
        borderRadius:'2px',
        position:'relative',
        borderBottom:'1px solid #ddd',
        "&:hover":{
            backgroundColor: lightGrey
        },
    },
    cardButtonSelected:{
        display:'block',
        textAlign:'left',
        alignItems:'flex-start',
        textTransform:'capitalize',
        fontWeight:'400',
        color:solidGrey,
        fontSize:'1.6rem',
        backgroundColor: lightGrey,
        width:'100%',
        padding:'0 5px',
        height:50,
        borderRadius:'0',
        position:'relative',
        "&:hover":{
            backgroundColor: lightGrey
        },
        "&:after":{
            content:'""',
            width:'100%',
            bottom:0,
            position:'absolute',
            left:'0',
            right:'0',
            //boxShadow:'0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
            height:'1px',
            boxShadow:'0px 2px 4px 0px rgba(0, 0, 0, 0.2), 0px 1px 2px 0px rgba(0, 0, 0, 0.14)'
        }
    },
    assesseesMenuItemsDisabled:{
        textAlign: 'center',
        cursor: 'pointer',
        fontSize: '1.6rem',
        textTransform: 'lowercase',
        color: secondaryColor,
        width: '100%',
        fontWeight:'400'
    },
    PopHeaderTitle:{
        textAlign:'left',
        flex:'1',
        padding:'18px 10px',
        fontSize:'1.6rem',
        color:'#fff',
        fontWeight:'500'
    },
    popUpTitleContainerMid:{
        backgroundColor:midBlue,
        display:'flex',
        height:'50px'
    },
    popUpTitleContainerMidGreen:{
        backgroundColor:midGreen,
        display:'flex',
        height:'50px'
    },
    measureBoxDash: {
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        padding: '10px',
        cursor: 'pointer',
        color: theme.palette.text.secondary
    },
    measureBoxFooter: {
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        padding: '0 10px',
        height:'60px',
        cursor: 'pointer',
        color: theme.palette.text.secondary
    },

    popUpTitleContainerParentDossierMid:{
        display: 'flex',
        justifyContent: 'flex-end',
        backgroundColor:solidBlue,
        height:'50px'

    },
    ediatableLabel:{
        flex:1,
        lineHeight:'2rem',
        height:'2rem',
        "& label":{
            lineHeight:'2rem',
            height:'2rem'
        },
        "& + div > input":{
            padding:'0px',
            lineHeight:'2rem',
            height:'2rem'
        }
    },
    editableIcon:{
        flex:1,
        position:'absolute',
        bottom:'25px',
        left:'35px'
    },
    editIcon:{
        width:'14px',
        height:'14px'
    },
    iconsBarPager: {
        color: solidGrey,
        fontSize: '2rem',
        cursor: 'pointer',
        backgroundColor:lightGrey,
        color:solidGrey
    },
    makeClickable: {
        cursor: 'default'
    },
    clickable: {
       cursor: 'pointer'
    },
    iconBarNavPager:{
        display: 'flex',
        flex: 4,
        height:'50px'
    },

    dossierContainerNav: {
        bottom: 0
    },
    labelInputAlias:{
        fontSize:'1.2rem',
        color:secondaryColor,
        transform: 'translate(0, 1.5px) scale(1)'
    },
    textForInput:{
        fontSize:'1.6rem'
    },
    textForLabel:{
        fontSize:'1.2rem'
    },
    tabNav:{
        textTransform:'capitalize',
        fontSize:'1.6rem !important',
        flex:1
    },
    tabsContainer:{
        fontSize:'1.6rem',

    },
    tabContent:{
        padding:'10px 0'
    },
    flexBox:{
        display:'flex',
        height:'50px'
    },

    flagCard:{
        display:'inline-block',
        height:'16px',
        top:'10px',

    },
    checkBoxDiv:{
        height:'16px',
        top:'25px',
        margin:'0',

    },
    flagWrap:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width:'50%',
        float:'right',
    },
    createDivider:{
        marginBottom:'10px'
    },
    checked:{
        color:solidGrey
    },
    detailsContent:{
        padding:'10px 5px'
    },
    dossierContainerRightTabs:{
        margin:'0 5px'
    },
    dossierContainerTop:{
        margin:'0 5px 5px 5px'
    },
    keyCard:{
        // padding:'5px',
      margin:'0 5px 0 5px'
    },
    lightBoxDiv:{
        margin:'100px 0'
    },
    mbPager:{
        display: 'flex',
        flex: 1,
        textAlign:'center',
        justifyContent:'center',

    },
    leftPanelProfile:{
        margin:'10px 5px'
    },
    NavlistMenu:{
        padding:'0',
        fontSize:'1.6rem'
    },
    leftMenu:{
        fontSize:'1.6rem'
    },
    bufferDiv:{
        height:'10px'
    },
    footerLabel:{
        fontSize:'1.6rem'
    },
    filteredCard:{
        padding:'0',
        backgroundColor:'red'
    },
    leftFooterD:{
        height: 60,
        padding: '0 5px',
        position: 'fixed',
        bottom: 10,
        left: 0,
        width: 'calc(33.33vw - 11px)',
    },

    leftFooterM:{
        height: 60,
        padding: '0 10px',
        position: 'fixed',
        bottom: 10,
        left: 0,
        width: 'calc(100% - 20px)',
    },
    rightFooterD:{
        height: 60,
        padding: '0 5px',
        position: 'fixed',
        bottom: 10,
        width: 'calc(33.33vw - 11px)',
        right: '1px',

    },

    rightFooterM:{
        height: 60,
        padding: '0 10px',
        position: 'fixed',
        bottom: 10,
        width: 'calc(100% - 20px)',
        right: 0
    },
    footerInner:{
        flex:'1',
        padding:'0 5px',
        "& div":{
            padding:'0px'
        }
    },
    comingSoonPane: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        verticalAlign: 'middle'
    },
    IconName:{
        fontSize:'1rem',
        padding:'6px 0 0 0'
    },
    menuLeft:{
        margin:'0 0 0 0'
    },
    leftNavMenu:{
        margin:'5px 5px 0 5px',
        height:'50px',
        cursor:'pointer',
    },
    leftNavAccount:{
        margin:'5px 0 5px',
        height:'50px',
        cursor:'pointer',
    },
    leftNavButton:{
        display:'flex',
        height:'50px',
        padding:'5px',
        fontSize:'1.6rem',
        fontWeight:'400',
        color:solidGrey
    },
    leftMenuPaper:{
        backgroundColor:'#fff',
        transition:'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        "&:hover":{
            backgroundColor:lightGrey,
        }
    },
    leftIcon:{
        flex:'1',
        marginRight:'0px',
        justifyContent:'center',
        position:'relative',
        bottom:0,
        textAlign:'center',
        color:solidGrey,
        width: '2rem',
        height: '2rem'
    },
    leftMenuText:{
        flex:'5',
        color:dataColor,
        padding:0
    },
    MuiBottomNavigationCustom:{
        height:'60px',
        background: 'transparent'
    },
    dashboardCardTop: {
        backgroundColor: '#fff',
        display: 'flex',
        cursor: 'pointer',
        color:solidGrey,
        height: 50,
        transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        "&:hover":{
            backgroundColor:lightGrey
        }
    },
    dashboardCardBottom: {
        backgroundColor: '#fff',
        display: 'flex',
        cursor: 'pointer',
        color:solidGrey,
        height: 50,
        marginTop: 5,
        transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        "&:hover": {
            backgroundColor: lightGrey
        }
    },
    associateCard: {
        backgroundColor: '#fff',
        display: 'flex',
        color:solidGrey,
        height: 50,
        marginTop: 5,
        transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        "&:hover": {
            backgroundColor: lightGrey
        }
    },
    mT4:{
        marginTop: 4
    },
    blankCardContainer:{
        height: 50,
        margin:'0px 5px 0 5px'
    },
    blankCardPaper:{
        height:50,
        alignItems:'center'
    },
    dossierContainerProfile:{
        margin:'0px 5px 5px 5px'
    },
    assesseesMenuItemsRadio:{
        textAlign: 'center',
        cursor: 'pointer',
        fontSize: '1.6rem',
        textTransform: 'lowercase',
        color: solidGrey,
        width: '100%',
        fontWeight:'400',
        minWidth:'140px',
        justifyContent:'center',
        height:'auto',
        "& span":{
            fontSize:'1.2rem',
            color:'#808080',
            height:'30px',
            lineHeight:'30px'
        },
        "& [class*='MuiTouchRipple']":{
            width:'48px',
            height:'48px',
            left:'0px',
            right:'0px',
            top:'0px',
            bottom:'0px',
            margin:'auto'
        }
    },
    optionsMajor:{
        flex:5
    },
    optionBox:{
        display:'flex'
    },
    switchBox:{
        flex:2
    },
    assesseesMenuOptions:{
        justifyContent:'left',
        cursor: 'pointer',
        fontSize: '1.6rem',
        textAlign: 'left',
        textTransform: 'lowercase',
        color: solidGrey,
        width: '100%',
        fontWeight:'400',
        padding:'10px'
    },
    expansionPanel:{
        margin:'5px 0',
        boxShadow:'0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)'
    },
    associateContainer:{
        textTransform:'lowercase'
    },
    blankCardContent:{
        padding:'15px 5px',
        color:solidGrey,
        fontWeight:'500'
    },
    footerPopupIcons:{
        padding:'0px',
        display:'block',
        width: '300px',
        flexWrap: 'wrap',
        '& > div':{
            display:'flex',
            '& > div':{
                flex:'1',
                justifyContent:'center',
                alignItems:'center',
                padding: '10px 0px',
                '& > label':{
                    fontSize:'1rem'
                }
            }
        },
        "@media (max-width:360px)":{
          width:'calc( 100vw - 64px )'
        }
    },
    rightTabDetailMain:{
        display:'flex',
        padding:'0 5px 0 4px'
    },
    rightDetailTabLabel:{
        flex:'4',
        height:'50px',
        '& .blankCardContent':{
            padding:'15px 0'
        }
    },
    rightDetailTab:{
        flex:'1',
        "& div":{
            display:'flex',
            flex:"1",
            alignItems:"center",
        },
        "& > div > div > div":{
            justifyContent:"space-between",
            padding:'0 20%',
            height:'50px',
            "& + span":{
                display:'none'
            },
        },

        "& button":{
            flex:"initial",
            fontSize:"1.6rem",
            borderRadius:"10px",
            backgroundColor:lightGrey,
            padding:'2px 5px',
            color:dataColor,
            height: 'auto',
            fontWeight:'400',
            opacity:'1',
            width:'85px',
            transition:'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            boxShadow: '0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)',
            "&:hover":{
                color:lightGrey,
                backgroundColor:midGrey,
                boxShadow: '0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)'
            },
            "&[class*='rootInheritSelected']":{
               color:lightGrey,
                backgroundColor:midGrey
            },
            "@media (min-width: 960px)":{
                minWidth:'initial'
            }
        },
        "& button *":{
            padding:'0',
            fontSize:'1.6rem',
            textTransform: 'lowercase'
        },
    },
    checkboxContainer: {
        display:'flex',
        padding:'5px 10px',
        width:'100%',
        margin:0,
        "& span" : {
            fontSize:'1.6rem',
            color:solidGrey
        }
    },
    authCover: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage:'url(../resources/images/bg.jpeg)',
        height: '100%',
        width: '100%',
        flexDirection: 'column',
        backgroundSize: 'cover'
    },
    authBody: {
        height: 'auto',
        margin: 'auto',
        width: 300,
        borderTopRightRadius:0,
        // backgroundImage:'url(../resources/images/image.png)',
        borderTopLeftRadius:0,
        borderRadius: 3,
        background: 'white',
        boxShadow: '0 1px 5px 0 rgba(0,0,0,0.26)',
        position:'relative'
    },
    authImgBg:{
      width:400,
        position:'absolute',
        top:'-190px',
        left:'-50px',
        right:'0px'
    },
    socialIcons:{
      width:'24px',
      height:'24px',
        fontSize:'1.2rem'
    },
    authImgLogo: {
      display: 'flex',
      justifyContent: 'space-between',
      height:'100%',
      padding: '0 10px'
    },
    logoImgDiv:{
      flex:3,
      display:'flex',
      justifyContent:'flex-start',
      alignItems:'center'
    },
    goIcon:{
        flex:1
    },
    authImg: {
        position: 'relative',
        width: 186,
        height: 43,
    },
    loginTitle:{
        height:60,
        borderRadius:0,
        '& > div':{
            borderRadius:0
        }

    },
    authLoginIcon: {
        display: 'inline-block',
        height: 25,
        cursor: 'pointer'
    },
    disabledAuthLoginIcon: {
        display: 'inline-block',
        height: 25,
        cursor: 'default'
    },
    authIntent: {
        padding: '5px 25px 0',
        fontSize: '1.2rem'
    },
    authInputBox: {
        padding: '10px 10px 10px 10px',
        "& input":{
            fontSize: '1.6rem'
        }
    },
    authInputSeparator: {
        height: 15
    },
    authforgotPassword: {
        cursor: 'pointer',
        textAlign: 'right',
        fontSize: '1.2rem',
        color: dataColor,
        display: 'flex',
        justifyContent: 'space-between'
    },
    radioBoxAll:{
        display:'flex'
    },
    radioAll:{
        flex:1
    },
    radioBox:{
        flex:1
    },
    bigBoxRadio:{
        display:'flex'
    },
    superscript:{
        fontSize:'1.2rem',
        position:'relative',
        top:'-3px'
    },
    Selected:{
        color:dataColor
    },
    tickOption:{
        position:'relative',
        color:dataColor,
    },
    tick:{
        position:'absolute',
        fontSize:'2rem',
        right:0,
        color:secondaryColor,
        top:0,
        bottom:0,
        zIndex:99,
        height:'30px',
        lineHeight:'30px',
        "& button":{
            height:'100%',
            color:secondaryColor
        }
    },
    errorText: {
        color: errorColor
    },
    nameText:{
      flex:1,
        textAlign:'left',
        color:dataColor
    },
    errorTextPwd:{
        color:errorColor,
        textAlign:'right'
    },
    forgotText:{
        fontSize:'1.2rem',
        display:'flex'
    },
    signIcons:{
      display:'flex',
        height:50,
        paddingBottom:'10px'
    },

    popupContent:{
        padding: '0 0',
        textAlign: 'center',width: 300,
        overflow:'auto',
        '@media (max-width: 360px)':{
            width:'calc( 100vw - 64px )'
        }
    },
    titleSolidGreen: {
        display: 'flex',
        height: '50px',
        backgroundColor:solidGreen,
        color:dataColor
    },
    titleSolidBlue: {
        display: 'flex',
        height: '50px',
        backgroundColor:solidBlue
    },
    titleWhite: {
        display: 'flex',
        height: '50px',
        backgroundColor:'white',
        color:dataColor
    },
    titleLightGreen: {
        display: 'flex',
        height: '50px',
        backgroundColor:midGreen,
        color:dataColor
    },
    titleLightBlue: {
        display: 'flex',
        height: '50px',
        backgroundColor:midBlue
    },
    optionButtonPrimary:{
        textAlign: 'center',
        cursor: 'pointer',
        fontSize: '1.6rem',
        textTransform: 'lowercase',
        color: dataColor,
        width: '100%',
        fontWeight:'400',
        '&:hover': {
            background: lightGreen
        },
        '&:focus': {
            background: lightGreen
        },
        '&:active': {
            background: lightGreen
        }
    },
    titleSecondary:{
        backgroundColor:'red'
    },
    optionButtonSecondary:{
        backgroundColor:'black'
    },
    optionSecondary: {
        textAlign: 'center',
        cursor: 'pointer',
        fontSize: '1.2rem',
        height:30,
        lineHeight:'1',
        minHeight:'inherit',
        textTransform: 'lowercase',
        color: dataColor,
        width: '100%',
        fontWeight:'400',
        '&:hover': {
            background: selectPrimary
        },
        '&:focus': {
            background: selectPrimary
        },
        '&:active': {
            background: selectSecondary
        }
    },
    optionSecondaryBlue: {
        textAlign: 'center',
        cursor: 'pointer',
        fontSize: '1.2rem',
        height:30,
        lineHeight:'1',
        minHeight:'inherit',
        textTransform: 'lowercase',
        color: dataColor,
        width: '100%',
        fontWeight:'400',
        '&:hover': {
            background: selectPrimary
        },
        '&:focus': {
            background: selectPrimary
        },
        '&:active': {
            background: selectSecondary
        }
    },
    selectionIcon:{
        fontSize:'1.2rem',
        position:'relative',
        right:'-2px',
        color:secondaryColor
    },
    optionPrimary: {
        textAlign: 'center',
        height:30,
        minHeight:'inherit',
        cursor: 'pointer',
        fontSize: '1.6rem',
        textTransform: 'lowercase',
        lineHeight:'1',
        color: dataColor,
        width: '100%',
        fontWeight:'400',
        '&:hover': {
            background: selectPrimary
        },
        '&:focus': {
            background: selectPrimary
        },
        '&:active': {
            background: selectSecondary
        }
    },
    optionPrimaryBlue: {
        textAlign: 'center',
        height:30,
        minHeight:'inherit',
        cursor: 'pointer',
        fontSize: '1.6rem',
        textTransform: 'lowercase',
        lineHeight:'1',
        color: dataColor,
        width: '100%',
        fontWeight:'400',
        '&:hover': {
            background:selectPrimary
        },
        '&:focus': {
            background: selectPrimary
        },
        '&:active': {
            background: selectSecondary
        }
    },

    middleTabLabel:{
        display:'flex',
        padding:'0 5px'
    },
    middleTabInner:{
        flex:'1',
        display:'flex',
        padding:'0 5px'
    },
    middleTabItem:{
        flex:"1",
        display:'flex',
        height:'50px',
        justifyContent:"center",
        alignItems:"center",
        position:'relative',
        width:'20%',
        "& button":{
            fontSize:"1.6rem",
            borderRadius:"15px",
            padding:'2px 5px',
            color:dataColor,
            fontWeight:'400',
            cursor:'pointer',
            margin:'auto',
            minWidth:'initial',
            minHeight:'initial',
            //width:'85px',
            width:'20px',
            height:'20px',
            position:'absolute',
            left:'auto',
            right:'auto',
            top:'50%',
            transform: 'translateY(-50%)',
            bottom:'auto',
            backgroundColor:'#fff',
            boxSizing:'border-box',
            textAlign:'center',
            border:'none',
            transition:'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            boxShadow: '0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)',
            "&:hover":{
                backgroundColor:'#e0e0e0'
            },
            "&:focus":{
                outline:'none'
            }
        },
        "&:nth-child(odd) div":{
            content: '""',
            height: '4px',
            position: 'absolute',
            width: '100%',
            top: '50%',
            backgroundColor: lightGrey,
            left: '0',
            borderRadius:'2px',
            marginTop:'-2px',
            boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
        }
    },
    activeTabItem:{
        "& button":{
            color:dataColor,
            borderColor:lightGrey,
            backgroundColor:lightGrey,
            "&:hover":{
                backgroundColor:'#e0e0e0'
            }
        }
    },
    popupHeaderTitle: {
        padding: '0',
        textAlign: 'right',
        color: dataColor,
        fontSize:'1.6rem',
        '& > div':{
            borderRadius:0
        }
    },
    titleBox:{
        textAlign:'left',
        flex:'3',
        padding:'18px 10px',
        fontSize:'1.6rem',
        color:'#ffffff',
        fontWeight:'500',
        maxWidth:'180px',
        whiteSpace:'nowrap',
        textOverflow:'ellipsis',
        overflow:'hidden'
    },
    whiteTitle:{
        textAlign:'left',
        flex:'3',
        padding:'18px 10px',
        fontSize:'1.6rem',
        color:dataColor,
        fontWeight:'500',
        overflow: 'hidden',
        whiteSpace:'nowrap',
        textOverflow:'ellipsis'
    },
    popupClose: {
        color:'#ffffff',
        fontSize: '2rem',
        cursor: 'pointer'
    },
    darkTitle: {
        color:dataColor,
        fontSize: '2rem',
        cursor: 'pointer'
    },
    textDefault:{
        color:dataColor
    },
    parentDialogue:{
        borderTopRightRadius:0,
        webkitBorderTopLeftRadius:0,
        '& > div':{
            top:74,
            '@media (max-width: 508px)':{
                top:64
            },
            '@media (min-width: 509px) and (max-width: 599px)':{
                top:57
            },
            '&:nth-child(2)':{
                borderRadius:'0 0 2px 2px'
            }
        },

    },
    signClass:{
        /*width:35,
        height:35,*/
        margin:'0px 0 0 0'
    },
    /*temporary added*/
   /* helperText:{
        display:"none"
    },*/
    middleTabLabelRight:{
        margin:'0 -5px'
    },
    backArrow:{
        flex:'1',
        justifyContent:'center',
        alignItems:'center'
    },
    backArrowWhite:{
        flex:'1',
        justifyContent:'center',
        alignItems:'center',
        color:dataColor
    },
    backArrowNone:{
        display:'none'
    },
    expansionHeader:{
        display:'flex',
        borderBottom: '1px solid #f2f2f2',
        boxSizing: 'border-box',
        "& > div:first-child":{
            flex:'5',
            maxWidth:'82.333%'
        },
        "& > div:last-child":{
            width:'calc( 16.667% - 2px )',
            right:'5px',
            "& svg":{
                width:'2rem',
                height:'2rem'
            }
        },
        "&:hover":{
            backgroundColor:lightGrey
        }
    },
    selectedCard: {
        backgroundColor:lightGrey
    },
    downloadInProgress:{
        padding:'0 5px',
        height:'50px',
        display:'flex',
        alignItems:'center',
        "& > div":{
            flex:'1',
            padding:'0 5px !important',
            fontSize:'1.6rem'
        }
    },
    workInProgress:{
        padding:'0 5px',
        height:'50px',
        display:'flex',
        alignItems:'center',
        "& > div":{
            flex:'1',
            padding:'0 5px',
            fontSize:'1.6rem'
        }
    },
    expandedPanel:{
        backgroundColor:lightGrey,
        boxShadow:'0px 1px 1px 0px rgba(0, 0, 0, 0.18), 0px 2px 2px 0px rgba(0, 0, 0, 0), 0px 3px 1px 0px rgba(0, 0, 0, 0.18)',
    },
    formControlRight:{
        padding:'2px 0 0 0',
        "& input":{
            textOverflow:'ellipsis'
        }
    },
    textForLabelRight:{
        lineHeight:'2rem',
        transform: 'translate(0, 1.5px) scale(1)',
        "& sup":{
            bottom: '1px',
            display: 'inline-block',
            padding: '1px 5px',
            position: 'relative',
            border:'1px solid',
            fontWeight: '400',
            borderRadius: '16px',
            lineHeight:'initial',
            verticalAlign:'middle',
            marginLeft:'5px',
            cursor:'pointer',
            //color:dataColor,
            backgroundColor:'#fff',
            //boxShadow:'0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)',
            transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            "&$activeLabelItem":{
                backgroundColor:lightGrey,
                //borderColor:lightGrey,
            }
        }
    },
    textForLabelRight:{
        lineHeight:'2rem',
        transform: 'translate(0, 1.5px) scale(1)',
        "& sup":{
            bottom: '1px',
            display: 'inline-block',
            padding: '1px 5px',
            position: 'relative',
            border:'1px solid',
            fontWeight: '400',
            borderRadius: '16px',
            lineHeight:'initial',
            verticalAlign:'middle',
            marginLeft:'5px',
            cursor:'pointer',
            //color:dataColor,
            backgroundColor:'#fff',
            //boxShadow:'0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)',
            transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            "&$activeLabelItem":{
                backgroundColor:lightGrey,
                //borderColor:lightGrey,
            }
        }
    },
    badgeSmall:{
        bottom: '1px',
        margin:'0.5px',
        display: 'inline-block',
        padding: '1px 5px',
        position: 'relative',
        border:'1px solid',
        fontWeight: '400',
        borderRadius: '16px',
        lineHeight:'initial',
        verticalAlign:'middle',
        marginLeft:'5px',
        cursor:'pointer',
        color:secondaryColor,
        fontSize:'1rem',
        backgroundColor:'#fff',
        transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        "&$activeLabelItem": {
            backgroundColor: lightGrey
        }
    },
    shadowEffect:{
        boxShadow:'0px 1px 1px 0px rgba(0, 0, 0, 0.18), 0px 2px 2px 0px rgba(0, 0, 0, 0), 0px 3px 1px 0px rgba(0, 0, 0, 0.18)',
    },
    activeLabelItem:{

    },
    careerIcon: {
        flex: 1,
        display:'flex',
        alignItems:'center',
        justifyContent: 'center',
        fontSize: '2rem',
        "& button":{
        }
    },
    iconCredential:{
        flex: 1,
        display:'flex',
        alignItems:'center',
        justifyContent: 'center',
        "& img":{
            cursor:'pointer'
        }
    },
    credentialLabel:{
        transform: 'translate(0, 1.5px) scale(1)',
        lineHeight: '50px',
    },
    careerLabelRight:{
        transform: 'translate(0, 1.5px) scale(1)',
        lineHeight: '50px',
        whiteSpace:'nowrap'
    },
    optionPrimaryDisabled: {
        color: secondaryColor,
        textAlign: 'center',
        height: 30,
        minHeight: 'inherit',
        fontSize: '1.6rem',
        textTransform: 'lowercase',
        lineHeight: '1',
        width: '100%',
        fontWeight: '400',
        cursor: 'default',
        '&:hover': {
            backgroundColor: 'transparent'
        }
    },
    tooltip:{
        fontSize:'1.6rem',
        "& span":{
            maxWidth:'100%',
            display:'block',
            whiteSpace:"nowrap",
            overflow:'hidden',
            textOverflow:'ellipsis'
        },
        "& div":{
            fontSize:'1.6rem',
            lineHeight:'1.6rem'
        }
    },
    informationIcons:{
        padding:'10px 0'
    },
    fingerImg:{
        width:'auto',
        maxWidth: '260px',
        opacity:'0.7'
    },
    imageMap:{
        "& area:hover":{
            opacity:'0.5'
        }
    },
    dashboardProfileMidRight:{
        cursor:'initial',
        "& $dashboard":{
            cursor:'default'
        }
    },
    imagePopup:{
        padding:'10px 0'
    },
    badgeForLabel: {
        bottom: '1px',
        display: 'inline-block',
        padding: '1px 5px',
        position: 'relative',
        border: '1px solid',
        fontWeight: '400',
        borderRadius: '16px',
        lineHeight: 'initial',
        verticalAlign: 'middle',
        marginLeft: '5px',
        cursor: 'pointer',
        //color:dataColor,
        backgroundColor: '#fff',
        //boxShadow:'0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)',
        transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        "&$activeLabelItem": {
            backgroundColor: lightGrey,
            //borderColor:lightGrey,

        }
    },
    titleCardGrey:{
        display: 'flex',
        height: '50px',
        backgroundColor:lightGrey,
        color:dataColor
    },
    optionSignIn: {
        textAlign: 'center',
        height:30,
        minHeight:'inherit',
        cursor: 'pointer',
        fontSize: '1.6rem',
        textTransform: 'lowercase',
        lineHeight:'1',
        color: dataColor,
        width: '100%',
        fontWeight:'400',
        '&:hover': {
            background: selectPrimary
        },
        '&:focus': {
            background: selectPrimary
        },
        '&:active': {
            background: selectSecondary
        }
    },
    cardContentMidPanelIcon:{
        flex:2
    },
    startEndDates:{
        "& > *":{
            flex:'2'
        }
    },
    verticalLabels:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center',
        width:'100%',
        "& > span":{
            marginLeft:'inherit'
        }
    },

    deskDiv:{
        flex:5,
        '@media (max-width: 960px)':{
             display:'none'
        }
    },

    forMobileDiv:{
         display:'none',
        '@media (max-width: 960px)':{
            display:'block',
        }
    },
    iconsImageDefault:{
        padding:0,
        position:'relative',
        transition:'all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        "& $avatar":{
            margin:0
        },
        "&:hover":{
            opacity:'0.8'
        }
    },
    revisePopupContent:{
        padding:'10px !important',
    },
    inputFields:{
        width:'100%',
        "& > div": {
            margin: '0px',
            "& label + div":{
                padding:'1px 0px 1px 0px ',
                lineHeight:'1.6'
            }
        },
        "& input":{
            fontSize:'1.6rem'
        },
        "& textarea":{
            fontSize:'1.6rem',
        },
        "& $helperText":{
            marginTop:'5px'
        }
    },
    tagInputs:{
        "& > div":{
            flex:'4',
            "&:first-child":{
                flex:'1',
                "& input":{
                    color:dataColor
                }
            }
        },
        "& span":{
            display:'flex',
            justifyContent:'flex-end',
            alignItems:"flex-end",
            padding:'0 5px 7px'
        }
    },
    selectFields:{
        width:'100%',
        "& div":{
            textAlign:'left'
        }
    },
    heightAuto:{
        height:'auto'
    },
    disabledClass:{
        backgroundColor:'rgba(255,255,255,0.5)'
    },
    dateFields:{
        width:'100%',
        "& input":{
            fontSize:"1.6rem"
        }
    },
    imageNA:{
        fontSize:'4rem',
        backgroundColor:fourthGrey +"!important",
        color:'#fff'
    },
    fontSize_4rem:{
      fontSize:'4rem'
    },
    fontSize_2_4rem:{
        fontSize:'2.4rem'
    },
    twentyFour:{
        width:24,
        height:24,
        fontSize:'1.2rem',
        backgroundColor:'white',
        boxShadow:'0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)'
    },
    socialIconBox:{
        display:'flex'
    },
    iconsBarDefaultFlag:{
        display:'flex',
        flex:'1',
        alignItems:'center',
        "& > *":{
            flex:'1',
            display:'flex',
            alignItems:'center',
            justifyContent:"center"
        },
        "& button":{
            color:secondaryColor,
            width:'4rem',
            height:'4rem',
            "&$selectedIconColor":{
                color:secondaryColor
            }
        },
    },
    selectedIconColor:{},
    midGreyBG:{
        backgroundColor:secondaryColor + "!important"
    },

    accountDiv:{
        flex:1,
        '& > div':{
            width:'100%'
        }
    },
    logoDiv:{
        flex:'2 !important',
        '@media(max-width:960px)':{
            flex:'5 !important'
        }
    },
    flexForSignIn:{
        display:'flex',
        justifyContent:'center'
    },
    layoutDiv:{
        display:'flex',
        flex:1,
        justifyContent:'center'
    },
    // NewFlex:{
    //     flex:1,
    //     display:'flex',
    //     justifyContent:"center"
    // },
    flexForMobile:{
        // display:'flex',
        // justifyContent:'center',
        // flex:1
    },
    selectedOption:{
        "& button":{
            color:secondaryColor,
            height:'50px',
            fontSize:'2rem',
            "&$selectedIconColor":{
                color:secondaryColor
            }
        },

    },
    iconsImageDefaultFlat:{
        outline:'none',
        boxShadow:'none',
        border:'none',
        backgroundColor:'transparent'
    },
    verifiedUser:{
        alignItems:'flex-start',
        paddingTop:'2px',
        "& > button":{
            margin:'0 0 0 0',
            height:'20px',
            alignItems:'flex-start',
            "& img":{
                width:'20px',
                height:'20px',
            }
        }
    },
    verifiedUserTop:{
        padding:'0',
        "& > button":{
            alignItems:'center'
        }
    },
    verifiedBadge:{
        position:'absolute',
        width:'20px',
        height:'20px',
        bottom:'-5px',
        right:'0',
        left:'0',
        padding:'0px',
        backgroundColor:'#fff',
        boxSizing:'border-box',
        borderRadius:'50%',
        margin:'auto',
        "& img":{
            width:'100%',
            height:'100%',
            display:'block'
        }
    },
    selectedMail:{
        alignItems:'flex-start',
        paddingTop:'2px',
        "& button":{
          height:'20px'
        },
        "& svg":{
            height:'20px',
            width:'20px',
            fontSize:'2rem',
            color:secondaryColor
        }
    },
    notificationIcon:{
        "& button":{
            fontSize:'2.4rem',
            color:secondaryColor,
            "& svg":{
                width:'20px',
                height:'20px',
                color:secondaryColor
            }
        }
    },
    linkText:{
        color:solidBlue,
        cursor:'pointer',
    },
    unitFlexTop:{
        flexDirection:'column',
        alignItems:'center',
        "& *":{
            alignItems:'center',
        },
        "& button":{
            height:'20px'
        }
    },
    popupMainHeader:{
        maxWidth:'300px'
    },
    rightArrow:{

    },
    labelPopupBox:{
        minHeight: '30px',
        alignItems: 'center',
        margin: '0px',
        flexDirection: 'row',
        "& label":{
            margin:'0px',
            // transform:'translate(0, 10px) scale(0.75)',
            fontSize:'1.2rem'
        }
    },
    width100:{
        width:'100%'
    },
    inputLabelPop:{
        width:'100%',
        "& input":{
            fontSize:'1.6rem'
        }
    },
    textForLabelPopup:{
        lineHeight:'1.2rem',
        "& sup":{
            bottom: '1px',
            display: 'inline-block',
            padding: '0px 3px',
            position: 'relative',
            border:'1px solid',
            fontWeight: '400',
            borderRadius: '16px',
            lineHeight:'initial',
            verticalAlign:'middle',
            marginLeft:'3px',
            cursor:'pointer',
            //color:dataColor,
            backgroundColor:'#fff',
            //boxShadow:'0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)',
            transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            "&$activeLabelItem":{
                backgroundColor:lightGrey,
                //borderColor:lightGrey,
            }
        }
    },
    uploadButton:{
        paddingLeft:'0',
        "& input":{
            width:'100%'
        }
    },
    fileFields:{
        "& button":{
            padding:'0px',
            minHeight:'initial'
        }
    },
    font1_2:{
        fontSize:'1.2rem'
    },
    font1_0:{
        fontSize:'1.0rem'
    },
    noShadowDisabled:{
        background:'#fff !important' ,
        color:secondaryColor,
        boxShadow:'0px 3px 5px -1px rgba(0, 0, 0, 0), 0px 6px 10px 0px rgba(0, 0, 0, 0), 0px 1px 18px 0px rgba(0, 0, 0, 0) !important',
        "& + label":{
            color:secondaryColor,
        },
        "&:hover":{
            background:'#fff' ,
            color:secondaryColor,
        },
    },
    noShadowEnabled:{
        background:'#fff !important' ,
        color:dataColor,
        boxShadow:'0px 3px 5px -1px rgba(0, 0, 0, 0), 0px 6px 10px 0px rgba(0, 0, 0, 0), 0px 1px 18px 0px rgba(0, 0, 0, 0) !important',
        "& + label":{
            color:secondaryColor,
        },
        // "&:hover":{
        //     background:'#fff' ,
        //     color:secondaryColor,
        // },
    },
    checkedFont:{
        fontSize:'1.2rem',
        '& span':{
            fontSize:'1.2rem',
            color:secondaryColor,
            height: '30px',
            lineHeight: '30px',
        },
        '& svg':{
            fontSize:'1.6rem',
        },

    },
    PopupFormCheckBox: {
        margin: '5px 0 3px 0',
        //minHeight:'65px',
        display: 'flex',
        alignItems:'center',
        flexDirection:'column',
        overflow:'hidden',
        "& label":{
            fontSize:'1.6rem'
        }
    },
    PopupFormBoxNew: {
        margin: '7px 0 10px',
        minHeight:'65px',
        display: 'flex',
        alignItems:'center',
        flexDirection:'column',
        overflow:'hidden',
        "& label":{
            fontSize:'1.6rem'
        }
    },
    margin_0:{
        marginTop:'0'
    },
    marginBottom_0:{
        marginBottom:'0'
    },
    padding_0: {
        padding: '0'
    },
    checkedFontNew:{
        fontSize:'1.2rem',
        flex:1,
        position: 'relative',
        //  top:'-6px',
         right:'-9px',
         height:'25px',
        '& span':{
            fontSize:'1.2rem',
            color:dataColor,
            height: '25px',
            lineHeight: '30px',
        },
        '& svg':{
            fontSize:'1.2rem',
            color:dataColor
        }

    },
    checkedNotify:{
        flex:1,
        position: 'relative',
        //  top:'-6px',
        right:'5px',
        // height:'25px',
        '& span':{
            color:dataColor,
            // height: '25px',
            lineHeight: '30px',
        },
        '& svg':{
            color:dataColor,
            fontSize:'1.6rem',
            width:'20px',
            height:'20px'
        }

    },
    checkedFontNewDisable:{
        fontSize:'1.2rem',
        flex:1,
        position: 'relative',
        //  top:'-6px',
         right:'-9px',
         height:'25px',
        '& span':{
            fontSize:'1.2rem',
            color:secondaryColor,
            height: '25px',
            lineHeight: '30px',          
        },
        '& svg':{
            fontSize:'1.2rem',
            color:dataColor
        }
        
    },
    contFlex:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'100%'
    
    },
    f4:{
        flex:4,
        textAlign:'left',
        fontSize:'1.2rem',
        color:dataColor
    },
    f4Notify:{
        flex:4,
        textAlign:'left',
        fontSize:'1.2rem',
        color:dataColor,
        justifyContent:'flex-start'
    },
    f4Disable:{
        flex:4,
        textAlign:'left',
        fontSize:'1.2rem',
        color:secondaryColor
    },
    f1:{
        flex:1
    },
    inputFloatingLabel: {
        // '&:focused':{
        //     color: solidBlue,
        // }
         color: solidBlue,
        
    },
    inputUnderLine: {
        '&:after': {
           // color: solidBlue,
            borderBottom: '1px solid',
            borderColor:'#00AFFF !important',
        }
    },
    disableUnderline: {
        borderBottom: '1px solid',
        borderColor:secondaryColor,
    },
    revertedImg:{
        transform:'rotate(180deg)',
        marginTop:'-16px',
        // padding:'5px'
    },
    infoMessage:{
        padding:"20px 0 10px 0",},

    noShadowDisabled:{
        background:'#fff !important' ,
        color:secondaryColor,
        boxShadow:'0px 3px 5px -1px rgba(0, 0, 0, 0), 0px 6px 10px 0px rgba(0, 0, 0, 0), 0px 1px 18px 0px rgba(0, 0, 0, 0) !important',
        "& + label":{
            color:secondaryColor,
        },
        "&:hover":{
            background:'#fff' ,
            color:secondaryColor,
        },
    },
    noShadowEnabled:{
        background:'#fff !important' ,
        color:dataColor,
        boxShadow:'0px 3px 5px -1px rgba(0, 0, 0, 0), 0px 6px 10px 0px rgba(0, 0, 0, 0), 0px 1px 18px 0px rgba(0, 0, 0, 0) !important',
        "& + label":{
            color:secondaryColor,
        },
        "&:hover":{
            background:'#fff' ,
            color:secondaryColor,
        },
    },
    font2_0:{
        fontSize:'2rem'
    },
    d_none:{
        visibility:'hidden'
    },
    selectionDrives:{
        margin:'5px',
    },
    driveDropdown:{
        display:'block',
        textAlign:'left'
    },
    chooseBox:{
        display:'flex',
        alignItems:'center',
        verticalAlign:'center',
        margin:'0 5px 0 0'
    },
    iconDevice:{
       margin:'0 10px 0 5px',
        alignItems:'center',
        position:'relative',
        top:'10px'
    },

    textChoose:{
        width:'100%',
        alignItems:'center'
    },

    badgeBox:{

        '& > span':{
            top:-3,
            fontSize:'1rem',
            color:dataColor,
            right:6
        }
    },
    notificationIconTwo:{
      fontSize:'3rem '
    },

    badgeBoxTypeTwo:{

        '& > span':{
            top:12,
            left:12,
            fontSize:'1rem',
            color:'#fff'
        }
    },
    display_none:{
        display:'none'
    },
    flexWrapDiv:{
        display:'flex',

    },
    flex_4:{
        flex:'4',
        display:'flex',
        justifyContent:'flex-start'
    },
    notifyIcon:{
            position:'absolute',
            fontSize:'2rem',
            right:10,
            color:secondaryColor,
            top:0,
            bottom:0,
            zIndex:99,
            height:'30px',
            lineHeight:'30px',
            "& button":{
                height:'100%',
                color:secondaryColor
            }

    },
    badgeBoxNotify:{
        display:'inline-flex'
    },
    inputClearIcon:{
        position:"absolute",
        //color:secondaryColor,
        color: 'rgba(0, 0, 0, 0.54)',
        right:"5px",
        top:"20px",
        "& svg": {
            width:"1.2rem",
            height:"1.2rem"
        }
    }

});

export default globalStyles;