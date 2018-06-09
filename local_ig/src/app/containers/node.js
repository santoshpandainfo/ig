import React from 'react';
import Button from 'material-ui/Button'
import Tooltip from 'material-ui/Tooltip';
import SortableTree from 'react-sortable-tree';
import classNames from 'classnames';

// import 'style-tree.css'; // This only needs to be imported once in your app


//TODO: Samples are temp from requirements. To be service integrated


class NodeBlock extends React.Component{
    render(){
        let {classes, view, isHeight}= this.props;

        return(
            <div style={{height: isHeight(view), overflow: 'overlay', marginTop: 10, marginBottom: 10}}>
                <div className={classes.associateContainer} >
                    <Tree classes={classes} mainWidth={this.props.width}/>
                </div>
            </div>
        )
    }
};

  class Tree extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            treeData : [
                {
                    "Id": "59786c49e4b0ef707962e188",
                    "title": "insightGURU Design & Development",
                    "subtitle":" This is Test",
                    "Parent": "",
                    "expanded": true,
                    "children": [
                       {
                          "Id": "59bbcc5ee4b06c154543239e",
                          "title": "Management Team",
                          "subtitle":" This is Test",
                          "Parent": "59786c49e4b0ef707962e188",
                          "expanded": true,
                          "children": [
                             {
                                "Id": "59bbcc79e4b06c15454323a2",
                                "title": "Development Team",
                                "subtitle":" This is Test",
                                "Parent": "59bbcc5ee4b06c154543239e",
                                "expanded": true,
                                "children": [
                                   {
                                      "Id": "59bbcc87e4b06c15454323a6",
                                      "title": "MobiNext Technologies",
                                       "subtitle":" This is Test",
                                       "Parent": "59bbcc79e4b06c15454323a2",
                                      "expanded": true,
                                      "children": []
                                   }
                                ]
                             },
                             {
                                "Id": "59bbccbbe4b06c15454323aa",
                                "title": "Support Team",
                                "Parent": "59bbcc5ee4b06c154543239e",
                                "expanded": true,
                                "children": []
                             }
                          ]
                       },
                       {
                          "Id": "59bbcd38e4b06c15454323c6",
                          "title": "Assessees",
                          "Parent": "59786c49e4b0ef707962e188",
                          "expanded": true,
                          "children": []
                       },
                       {
                          "Id": "59ddc370e4b0bbdc4d706b26",
                          "title": "Assessments",
                          "Parent": "59786c49e4b0ef707962e188",
                          "expanded": true,
                          "children": []
                       },
                       {
                          "Id": "59ddc3d2e4b0bbdc4d706b2a",
                          "title": "Assignments",
                          "Parent": "59786c49e4b0ef707962e188",
                          "expanded": true,
                          "children": [
                             {
                                "Id": "59ddc3f3e4b0bbdc4d706b2e",
                                "title": "Assignment 1",
                                "Parent": "59ddc3d2e4b0bbdc4d706b2a",
                                "expanded": true,
                                "children": []
                             },
                             {
                                "Id": "59ddc42ee4b0bbdc4d706b32",
                                "title": "Assignment 2",
                                "Parent": "59ddc3d2e4b0bbdc4d706b2a",
                                "expanded": true,
                                "children": []
                             },
                             {
                                "Id": "59ddc439e4b0bbdc4d706b36",
                                "title": "Assignment 3",
                                "Parent": "59ddc3d2e4b0bbdc4d706b2a",
                                "expanded": true,
                                "children": []
                             },
                             {
                                "Id": "59ddc447e4b0bbdc4d706b3a",
                                "title": "Assignment 4",
                                "Parent": "59ddc3d2e4b0bbdc4d706b2a",
                                "expanded": true,
                                "children": []
                             },
                             {
                                "Id": "59ddc451e4b0bbdc4d706b3e",
                                "title": "Assignment 5",
                                "Parent": "59ddc3d2e4b0bbdc4d706b2a",
                                "expanded": true,
                                "children": []
                             }
                          ]
                       },
                       {
                          "Id": "59ddc4e7e4b0bbdc4d706b42",
                          "title": "Associates",
                          "Parent": "59786c49e4b0ef707962e188",
                          "expanded": true,
                          "children": []
                       },
                       {
                          "Id": "59e4b4bce4b0599ab9733c93",
                          "title": "TestGroup1",
                          "Parent": "59786c49e4b0ef707962e188",
                          "expanded": true,
                          "children": []
                       },
                       {
                          "Id": "59e5e4abe4b0599ab9733d1f",
                          "title": "TestGroup3",
                          "Parent": "59786c49e4b0ef707962e188",
                          "expanded": true,
                          "children": []
                       },
                       {
                          "Id": "59e5e4b4e4b0599ab9733d23",
                          "title": "TestGroup4",
                          "Parent": "59786c49e4b0ef707962e188",
                          "expanded": true,
                          "children": []
                       },
                       {
                          "Id": "59e5ff34e4b0599ab9733d94",
                          "title": "TesGroup4",
                          "Parent": "59786c49e4b0ef707962e188",
                          "expanded": true,
                          "children": []
                       },
                       {
                          "Id": "59e6037de4b0b807930632e2",
                          "title": "TestGroup5",
                          "Parent": "59786c49e4b0ef707962e188",
                          "expanded": true,
                          "children": [
                             {
                                "Id": "59e603d8e4b0b807930632e9",
                                "title": "TestGroup5child",
                                "Parent": "59e6037de4b0b807930632e2",
                                "expanded": true,
                                "children": []
                             },
                             {
                                "Id": "59ea04f6e4b0a4af352a2724",
                                "title": "TestGroup5Child1",
                                "Parent": "59e6037de4b0b807930632e2",
                                "expanded": true,
                                "children": [
                                   {
                                      "Id": "59ef0b7ce4b0a4af352a2b97",
                                      "title": "TestGroup5Child2",
                                      "Parent": "59ea04f6e4b0a4af352a2724",
                                      "expanded": true,
                                      "children": [
                                         {
                                            "Id": "59ef0d5fe4b0a4af352a2baf",
                                            "title": "TestGroup5Child3",
                                            "Parent": "59ef0b7ce4b0a4af352a2b97",
                                            "expanded": true,
                                            "children": [
                                               {
                                                  "Id": "59ef2298e4b0a4af352a2bc8",
                                                  "title": "TestGroup5Child4",
                                                  "Parent": "59ef0d5fe4b0a4af352a2baf",
                                                  "expanded": true,
                                                  "children": [
                                                     {
                                                        "Id": "59f026c5e4b0a4af352a2c83",
                                                        "title": "TestGroup5child5",
                                                        "Parent": "59ef2298e4b0a4af352a2bc8",
                                                        "expanded": true,
                                                        "children": [
                                                           {
                                                              "Id": "59f027fde4b0a4af352a2c95",
                                                              "title": "TestGroup5child6",
                                                              "Parent": "59f026c5e4b0a4af352a2c83",
                                                              "expanded": true,
                                                              "children": []
                                                           }
                                                        ]
                                                     }
                                                  ]
                                               }
                                            ]
                                         }
                                      ]
                                   }
                                ]
                             }
                          ]
                       },
                       {
                          "Id": "5a2935b5e4b0edecbee0e0b6",
                          "title": "Class X A",
                          "Parent": "59786c49e4b0ef707962e188",
                          "expanded": true,
                          "children": []
                       },
                       {
                          "Id": "5a2935d7e4b0edecbee0e0ba",
                          "title": "Class X B",
                          "Parent": "59786c49e4b0ef707962e188",
                          "expanded": true,
                          "children": []
                       }
                    ]
                 }
            ]
        };
      }    
    render() {
        let {classes} = this.props;
        return (
            <div style={{ height: 800 }}>
                <SortableTree className={classNames(classes.treeName,classes.textOverflow, classes.textDefault)}
                    treeData={this.state.treeData}
                    onChange={treeData => this.setState({ treeData })}
                />
            </div>
        );
    }
};

export default NodeBlock;