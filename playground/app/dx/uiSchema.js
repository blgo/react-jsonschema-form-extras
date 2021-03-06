export default {
  diagnosis: {
    classNames: "col-md-12",
    "ui:field": "table",
    table: {
      tableCols: [
        { dataField: "description", editable: false },
        { dataField: "icd10", editable: false },
        { dataField: "icd9", editable: false },
      ],
    },
    imo: {
      freeText: false,
    },
  },
};
