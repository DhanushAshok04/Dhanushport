import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "Passionate about Data Analytics",
              'Machine Learning',
              "Constant Learner",
              "Effective Problem Solver"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 30,
          }}
        />
      )
}

export default Type