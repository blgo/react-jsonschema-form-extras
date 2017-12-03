export default {
  required: [],
  type: "object",
  properties: {
    medicationData: {
      type: "object",
      properties: {
        medications_no_active: {
          type: "boolean",
          title: "NO ACTIVE MEDICATIONS",
        },
        medications: {
          type: "array",
          title: "Medications",
          items: {
            required: [],
            type: "object",
            properties: {
              drugId: {
                type: "string",
              },
              drugName: {
                type: "string",
                title: "Drug Name",
              },
              dosage: {
                type: "number",
                title: "Dosage",
              },
              quantity: {
                type: "number",
                title: "Quantity",
              },
              unit: {
                type: "string",
                title: "Units",
                enum: [
                  "Ampule",
                  "Applicator",
                  "Applicatorful",
                  "Bag",
                  "Bar",
                  "Bead",
                  "Blister",
                  "Block",
                  "Bolus",
                  "Bottle",
                  "Box",
                  "Can",
                  "Canister",
                  "Caplet",
                  "Capsule",
                  "Carton",
                  "Cartridge",
                  "Case",
                  "Cassette",
                  "Container",
                  "Cylinder",
                  "Disk",
                  "Dose Pack",
                  "Dual Pack",
                  "Film",
                  "Fluid Ounce",
                  "Gallon",
                  "Gram",
                  "Gum",
                  "Implant",
                  "Inhalation",
                  "Inhaler Refill",
                  "Inhaler",
                  "Insert",
                  "Intravenous Bag",
                  "Kilogram",
                  "Kit",
                  "Liter",
                  "Lozenge",
                  "Metric Drop",
                  "Milligram",
                  "Milliliter",
                  "Millimeter",
                  "Nebule",
                  "Ocular System",
                  "Ounce",
                  "Package",
                  "Pad",
                  "Paper",
                  "Patch",
                  "Pint",
                  "Pouch",
                  "Pound",
                  "Puff",
                  "Quart",
                  "Ring",
                  "Sachet",
                  "Scoopful",
                  "Sponge",
                  "Spray",
                  "Stick",
                  "Strip",
                  "Suppository",
                  "Swab",
                  "Syringe",
                  "Tablespoon",
                  "Tablet",
                  "Tabminder",
                  "Tampon",
                  "Teaspoon",
                  "Tray",
                  "Troche",
                  "Tube",
                  "Vial",
                  "Wafer",
                  "Each",
                  "French",
                  "Lancet",
                  "Milliequivalent",
                  "Needle Free Injection",
                  "Pen Needle",
                  "Pre-filled Pen Syringe",
                  "Pump",
                  "Unspecified",
                ],
              },
              refills: {
                type: "string",
                title: "Refills",
              },
              useGeneric: {
                default: true,
                type: "boolean",
                title: "Use Generic",
              },
              startDate: {
                type: "string",
                format: "date",
                title: "Start Date",
              },
            },
          },
        },
      },
    },
  },
};