import {
  BarChart,
  Calculator,
  Clock,
  CreditCard,
  Package,
  Printer,
  Store,
  Tag,
  Truck,
} from "lucide-react";

export interface Service {
  title: string;
  description: string;
  icon: any;
}

export interface ServiceProps {
  title: string;
  description: string;
  services: Service[];
}

export const serviceData: ServiceProps = {
  title: "Our Services",
  description: "Our products provide various solutions for everyone.",
  services: [
    {
      title: "24/7 Order Acceptance",
      description:
        "With our software solutions for e-commerce, ERP, and POS, you can effortlessly accept orders around the clock, even while you're asleep. Our system ensures that your business never stops, providing convenience and flexibility for both you and your customers. Sleep soundly, knowing your orders are in capable hands.",
      icon: Clock,
    },
    {
      title: "Automated Finance",
      description:
        "Say goodbye to manual financial calculations. Our software solutions for e-commerce, ERP, and POS automate your financial management processes. From tracking sales and expenses to generating reports and forecasts, our system handles it all. Enjoy hassle-free financial control and let our automation streamline your business operations.",
      icon: Calculator,
    },
    {
      title: "Simple Customer Ordering",
      description:
        "Simplify the customer ordering process with our software solutions. Now, all you need to do is click 'print.' Our e-commerce, ERP, and POS systems make customer orders a breeze, ensuring a seamless and efficient experience. Focus on what matters most - serving your customers - while we handle the rest.",
      icon: Printer,
    },
    {
      title: "Inventory Management",
      description:
        "Gain complete visibility into your order items and inventory with our software solutions. Our e-commerce, ERP, and POS systems offer real-time monitoring, enabling you to efficiently manage items and replenish stock as needed. Stay ahead of inventory shortages and provide uninterrupted service to your customers.",
      icon: Package,
    },
    {
      title: "Payment Integration",
      description:
        "We believe in making the buying process as simple as possible. Our software solutions seamlessly integrate with popular payment systems like WaveMoney, KBZPay, and Debit/Credit cards. This ensures a hassle-free and convenient payment experience for your customers. Stay ahead in the competitive market by offering multiple payment options with ease.",
      icon: CreditCard,
    },
    {
      title: "Discount and Rewards",
      description:
        "Our software solutions empower you to effortlessly manage discounts and rewards with ease. Whether it's applying discounts during checkout or implementing a loyalty points system, our e-commerce, ERP, and POS systems handle it all. Enhance customer satisfaction and loyalty by offering tailored discounts and rewards that keep them coming back for more.",
      icon: Tag,
    },
    {
      title: "Delivery Status Updates",
      description:
        "We've got your back when it comes to customer convenience. Our software solutions include an instant delivery status system. No more messages or phone calls to inquire about orders. Keep your customers informed every step of the way, from order placement to delivery, ensuring a seamless and worry-free shopping experience.",
      icon: Truck,
    },
    {
      title: "Reporting and Analytics",
      description:
        "Unlock the power of data with our software solutions. We provide comprehensive reporting and analytics tools that empower you to gain valuable insights into your business performance. Track sales trends, monitor customer behavior, and make informed decisions. Stay ahead of the competition with data-driven strategies that drive growth and success.",
      icon: BarChart,
    },
    {
      title: "Automated Finance",
      description:
        "Say goodbye to manual financial calculations. Our software solutions for e-commerce, ERP, and POS automate your financial management processes. From tracking sales and expenses to generating reports and forecasts, our system handles it all. Enjoy hassle-free financial control and let our automation streamline your business operations.",
      icon: Calculator,
    },
    {
      title: "Simple Customer Ordering",
      description:
        "Simplify the customer ordering process with our software solutions. Now, all you need to do is click 'print.' Our e-commerce, ERP, and POS systems make customer orders a breeze, ensuring a seamless and efficient experience. Focus on what matters most - serving your customers - while we handle the rest.",
      icon: Printer,
    },
    {
      title: "Inventory Management",
      description:
        "Gain complete visibility into your order items and inventory with our software solutions. Our e-commerce, ERP, and POS systems offer real-time monitoring, enabling you to efficiently manage items and replenish stock as needed. Stay ahead of inventory shortages and provide uninterrupted service to your customers.",
      icon: Package,
    },
    {
      title: "Payment Integration",
      description:
        "We believe in making the buying process as simple as possible. Our software solutions seamlessly integrate with popular payment systems like WaveMoney, KBZPay, and Debit/Credit cards. This ensures a hassle-free and convenient payment experience for your customers. Stay ahead in the competitive market by offering multiple payment options with ease.",
      icon: CreditCard,
    },
  ],
};
export const groupOne = [
  {
    title: "24/7 Order Acceptance",
    description:
      "With our software solutions for e-commerce, ERP, and POS, you can effortlessly accept orders around the clock, even while you're asleep. Our system ensures that your business never stops, providing convenience and flexibility for both you and your customers. Sleep soundly, knowing your orders are in capable hands.",
    icon: Clock,
    height: 200,
  },
  {
    title: "Automated Finance",
    description:
      "Say goodbye to manual financial calculations. Our software solutions for e-commerce, ERP, and POS automate your financial management processes. From tracking sales and expenses to generating reports and forecasts, our system handles it all. Enjoy hassle-free financial control and let our automation streamline your business operations.",
    icon: Calculator,
    height: 230,
  },
  {
    title: "Simple Customer Ordering",
    description:
      "Simplify the customer ordering process with our software solutions. Now, all you need to do is click 'print.' Our e-commerce, ERP, and POS systems make customer orders a breeze, ensuring a seamless and efficient experience. Focus on what matters most - serving your customers - while we handle the rest.",
    icon: Printer,
    height: 240,
  },
];

export const groupTwo = [
  {
    title: "Inventory Management",
    description:
      "Gain complete visibility into your order items and inventory with our software solutions. Our e-commerce, ERP, and POS systems offer real-time monitoring, enabling you to efficiently manage items and replenish stock as needed. Stay ahead of inventory shortages and provide uninterrupted service to your customers.",
    icon: Package,
    height: 260,
  },
  {
    title: "Payment Integration",
    description:
      "We believe in making the buying process as simple as possible. Our software solutions seamlessly integrate with popular payment systems like WaveMoney, KBZPay, and Debit/Credit cards. This ensures a hassle-free and convenient payment experience for your customers. Stay ahead in the competitive market by offering multiple payment options with ease.",
    icon: CreditCard,
    height: 200,
  },
  {
    title: "Discount and Rewards",
    description:
      "Our software solutions empower you to effortlessly manage discounts and rewards with ease. Whether it's applying discounts during checkout or implementing a loyalty points system, our e-commerce, ERP, and POS systems handle it all. Enhance customer satisfaction and loyalty by offering tailored discounts and rewards that keep them coming back for more.",
    icon: Tag,
    height: 240,
  },
];

export const groupThree = [
  {
    title: "Delivery Status Updates",
    description:
      "We've got your back when it comes to customer convenience. Our software solutions include an instant delivery status system. No more messages or phone calls to inquire about orders. Keep your customers informed every step of the way, from order placement to delivery, ensuring a seamless and worry-free shopping experience.",
    icon: Truck,
    height: 230,
  },
  {
    title: "Reporting and Analytics",
    description:
      "Unlock the power of data with our software solutions. We provide comprehensive reporting and analytics tools that empower you to gain valuable insights into your business performance. Track sales trends, monitor customer behavior, and make informed decisions. Stay ahead of the competition with data-driven strategies that drive growth and success.",
    icon: BarChart,
    height: 210,
  },
  {
    title: "Automated Finance",
    description:
      "Say goodbye to manual financial calculations. Our software solutions for e-commerce, ERP, and POS automate your financial management processes. From tracking sales and expenses to generating reports and forecasts, our system handles it all. Enjoy hassle-free financial control and let our automation streamline your business operations.",
    icon: Calculator,
    height: 230,
  },
];

export const groupFour = [
  {
    title: "Simple Customer Ordering",
    description:
      "Simplify the customer ordering process with our software solutions. Now, all you need to do is click 'print.' Our e-commerce, ERP, and POS systems make customer orders a breeze, ensuring a seamless and efficient experience. Focus on what matters most - serving your customers - while we handle the rest.",
    icon: Printer,
    height: 200,
  },
  {
    title: "Inventory Management",
    description:
      "Gain complete visibility into your order items and inventory with our software solutions. Our e-commerce, ERP, and POS systems offer real-time monitoring, enabling you to efficiently manage items and replenish stock as needed. Stay ahead of inventory shortages and provide uninterrupted service to your customers.",
    icon: Package,
    height: 220,
  },
  {
    title: "Payment Integration",
    description:
      "We believe in making the buying process as simple as possible. Our software solutions seamlessly integrate with popular payment systems like WaveMoney, KBZPay, and Debit/Credit cards. This ensures a hassle-free and convenient payment experience for your customers. Stay ahead in the competitive market by offering multiple payment options with ease.",
    icon: CreditCard,
    height: 240,
  },
];
