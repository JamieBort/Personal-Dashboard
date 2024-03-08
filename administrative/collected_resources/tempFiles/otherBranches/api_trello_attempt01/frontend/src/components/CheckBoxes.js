// Use this component to list checkboxes
import React from "react";
// import React, { useEffect, useState } from "react"; // TODO: delete these { useEffect, useState }
import CheckBox from "./CheckBox";

export default function CheckBoxes(props) {
  //   console.log(props);
  //   console.log(props.options); // an array of the properties

  //   const [isChecked, setIsChecked] = useState(true);
  //   const [isState, setState] = useState(true);
  //   const [list, setList] = useState([  // Not needed right now.
  //     {
  //       status: true,
  //       myProperty: "limits",
  //     },
  //     {
  //       status: true,
  //       myProperty: "limits",
  //     },
  //     {
  //       status: false,
  //       myProperty: "limits",
  //     },
  //     {
  //       status: true,
  //       myProperty: "limits",
  //     },
  //   ]);

  //   console.log("list:", list);

  // NOTE: do I need this variable?
  // const temp = [
  //   "id",
  //   "nodeId",
  //   "name",
  //   "desc",
  //   "descData",
  //   "closed",
  //   "dateClosed",
  //   "idOrganization",
  //   "idEnterprise",
  //   "limits",
  //   "pinned",
  //   "starred",
  //   "url",
  //   "prefs",
  //   "shortLink",
  //   "subscribed",
  //   "labelNames",
  //   "powerUps",
  //   "dateLastActivity",
  //   "dateLastView",
  //   "shortUrl",
  //   "idTags",
  //   "datePluginDisable",
  //   "creationMethod",
  //   "ixUpdate",
  //   "templateGallery",
  //   "enterpriseOwned",
  //   "idBoardSource",
  //   "premiumFeatures",
  //   "idMemberCreator",
  //   "memberships",
  // ];

  //   console.log("temp:", temp);

  //   useEffect(() => {
  //     setList([props.options]);
  //   }, []);

  //   const handleChange = (param) => {
  //     // console.log("handleChange is fired");
  //     // console.log("param:", param);

  //     // update props.options so that it contains only the properties that are supposed to display...
  //     // filter props.options so that Checkbox doesn't display if one of

  //     const newArray = temp.filter((item) => item !== param);
  //     // arr.filter(item => item !== value
  //     // console.log("newArray:", newArray);

  //     // temp.push(param);
  //     // console.log("list:", list);
  //     // setList(...temp);
  //     // // console.log("list:", list);
  //   };

  //   console.log("list:", list);

  //   for each property, generate a checkbox.
  const checkbox = props.options.map((property) => {
    // console.log(property); // each property
    return (
      <div key={property} style={{ display: "inline" }}>
        <CheckBox
          updateProperty={props.updateProperty}
          property={property}
          //   handleEvent={handleChange}  // Not needed right now.
          //   style={{ display: isState === false ? "none" : "inline" }}  // Not needed right now.
        ></CheckBox>
      </div>
    );
  });

  return <form>{checkbox}</form>;

  //   return <h4>hi</h4>;
}
