interface BondProps {
  id: number;
  tag: string;
  name: string;
  price: number;
  interestPayableDate: string;
  minimum: {
    amount: number;
    name: string;
  };
  interestPerYear: {
    amount: string;
    name: string;
  };
  interestPayment: {
    amount: string;
    name: string;
  };
  openingDate: {
    date: string;
    name: string;
  };
  closingDate: {
    date: string;
    name: string;
  };
  settlementDate: {
    date: string;
    name: string;
  };
}

export const bondList:BondProps[] = [
  {
    id: 1,
    tag: "FGN Savings Bond",
    name: "730 Days Saving Bond",
    price: 300000,
    interestPayableDate: "Due October 12, 2024",

    minimum: {
      amount: 5000,
      name: "Minimum",
    },
    interestPerYear: {
      amount: "11.382%",
      name: "% Per Year",
    },
    interestPayment: {
      amount: "Quarterly",
      name: "Interest Payment",
    },
    openingDate: {
      date: "Oct/04/2022",
      name: "Opening",
    },
    closingDate: {
      date: "Oct/07/2022",
      name: "Closing Date",
    },
    settlementDate: {
      date: "Oct/12/2022",
      name: "Settlement",
    },
  },
  {
    id: 2,
    tag: "FGN Savings Bond",
    name: "630 Days Saving Bond",
    price: 350000,
    interestPayableDate: "Due October 12, 2024",

    minimum: {
      amount: 5000,
      name: "Minimum",
    },
    interestPerYear: {
      amount: "11.382%",
      name: "% Per Year",
    },
    interestPayment: {
      amount: "Quarterly",
      name: "Interest Payment",
    },
    openingDate: {
      date: "Oct/04/2022",
      name: "Opening",
    },
    closingDate: {
      date: "Oct/07/2022",
      name: "Closing Date",
    },
    settlementDate: {
      date: "Oct/12/2022",
      name: "Settlement",
    },
  },
  {
    id: 3,
    tag: "FGN Savings Bond",
    name: "530 Days Saving Bond",
    price: 450000,
    interestPayableDate: "Due October 12, 2024",

    minimum: {
      amount: 5000,
      name: "Minimum",
    },
    interestPerYear: {
      amount: "11.382%",
      name: "% Per Year",
    },
    interestPayment: {
      amount: "Quarterly",
      name: "Interest Payment",
    },
    openingDate: {
      date: "Oct/04/2022",
      name: "Opening",
    },
    closingDate: {
      date: "Oct/07/2022",
      name: "Closing Date",
    },
    settlementDate: {
      date: "Oct/12/2022",
      name: "Settlement",
    },
  },
  {
    id: 4,
    tag: "FGN Savings Bond",
    name: "730 Days Saving Bond",
    price: 300000,
    interestPayableDate: "Due October 12, 2024",

    minimum: {
      amount: 5000,
      name: "Minimum",
    },
    interestPerYear: {
      amount: "11.382%",
      name: "% Per Year",
    },
    interestPayment: {
      amount: "Quarterly",
      name: "Interest Payment",
    },
    openingDate: {
      date: "Oct/04/2022",
      name: "Opening",
    },
    closingDate: {
      date: "Oct/07/2022",
      name: "Closing Date",
    },
    settlementDate: {
      date: "Oct/12/2022",
      name: "Settlement",
    },
  },
  {
    id: 5,
    tag: "FGN Savings Bond",
    name: "430 Days Saving Bond",
    price: 250000,
    interestPayableDate: "Due October 12, 2024",

    minimum: {
      amount: 10000,
      name: "Minimum",
    },
    interestPerYear: {
      amount: "11.382%",
      name: "% Per Year",
    },
    interestPayment: {
      amount: "Quarterly",
      name: "Interest Payment",
    },
    openingDate: {
      date: "Oct/04/2022",
      name: "Opening",
    },
    closingDate: {
      date: "Oct/07/2022",
      name: "Closing Date",
    },
    settlementDate: {
      date: "Oct/12/2022",
      name: "Settlement",
    },
  },
  {
    id: 6,
    tag: "FGN Savings Bond",
    name: "730 Days Saving Bond",
    price: 350000,
    interestPayableDate: "Due October 12, 2024",

    minimum: {
      amount: 5000,
      name: "Minimum",
    },
    interestPerYear: {
      amount: "11.382%",
      name: "% Per Year",
    },
    interestPayment: {
      amount: "Quarterly",
      name: "Interest Payment",
    },
    openingDate: {
      date: "Oct/04/2022",
      name: "Opening",
    },
    closingDate: {
      date: "Oct/07/2022",
      name: "Closing Date",
    },
    settlementDate: {
      date: "Oct/12/2022",
      name: "Settlement",
    },
  },
];
