import { Children } from "react";

const CustomSwitch = ({children, value}) => {
    const cases = [];
    const defaults = [];

    Children.forEach(children, (e) => {
        console.log(e.props);
        if(e.type.name === "CustomCase") {
            if(typeof e.props.value === 'function') {
                if(e.props.value(value)) {
                    cases.push(e);
                }
            } else if(value === e.props.value) {
                cases.push(e);
            }
        } else if(e.type.name === "DefaultCase") {
            defaults.push(e)
        }
    });

    console.log(cases);

    if(cases.length > 0) {
        return cases;
    } else {
        return defaults;
    }
}
export default CustomSwitch;