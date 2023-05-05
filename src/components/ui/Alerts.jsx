import { useState, Fragment } from "react";
import { Alert } from "@material-tailwind/react";
 
export default function Alerts({text,open}) {
  console.log(open)
 
  return (
    <Fragment>
    
      <Alert
        open={open}
        onClose={open}
        animate={{
          mount: { y: 0 },
          unmount: { y: 100 },
        }}
      >sdfsdfsdfdsf
        {text}
      </Alert>
    </Fragment>
  );
}