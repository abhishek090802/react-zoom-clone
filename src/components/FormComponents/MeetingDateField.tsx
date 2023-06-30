import { EuiDatePicker, EuiFormRow } from "@elastic/eui";
// Elastic UI (EUI) is a React component library developed by Elastic. It is designed to provide a set of reusable and customizable UI components that follow the Elastic Design System. 
// EUI offers a wide range of components such as buttons, forms, tables, modals, tooltips, navigation, and more. These components are designed to be flexible, accessible, and easy to use, allowing developers to create consistent and visually appealing interfaces.

import moment from "moment";
import React from "react";

function MeetingDateField({
  selected,
  setStartDate,
}: {
  selected: moment.Moment;
  setStartDate: React.Dispatch<React.SetStateAction<moment.Moment>>;
}) {
  return (
    <EuiFormRow label="Set Meeting Date">
      <EuiDatePicker
        selected={selected}
        onChange={(date) => setStartDate(date!)}
      />
    </EuiFormRow>
  );
}

export default MeetingDateField;
