-- 1. Create the 'productlines' table
CREATE TABLE IF NOT EXISTS productlines (
    productline_id INT NOT NULL AUTO_INCREMENT,
    productline_name VARCHAR(255) NOT NULL,
    PRIMARY KEY (productline_id)
);

-- 2. Create the 'products' table with a foreign key to 'productlines'
CREATE TABLE IF NOT EXISTS products (
    product_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    productline_id INT NOT NULL,
    PRIMARY KEY (product_id),
    CONSTRAINT fk_product_productline
        FOREIGN KEY (productline_id) REFERENCES productlines(productline_id)
        ON DELETE CASCADE
);

-- 3. Create the 'customers' table
CREATE TABLE IF NOT EXISTS customers (
    customer_id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255),
    phone_number VARCHAR(15),
    PRIMARY KEY (customer_id)
);

-- 4. Create the 'orders' table with a foreign key to 'customers'
CREATE TABLE IF NOT EXISTS orders (
    order_id INT NOT NULL AUTO_INCREMENT,
    customer_id INT NOT NULL,
    order_date DATE NOT NULL,
    status VARCHAR(50) NOT NULL,
    total DECIMAL(10,2) NOT NULL,
    PRIMARY KEY (order_id),
    CONSTRAINT fk_order_customer
        FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
        ON DELETE CASCADE
);

-- 5. Create the 'orderdetails' table with a foreign key to 'orders' and 'products'
CREATE TABLE IF NOT EXISTS orderdetails (
    orderdetail_id INT NOT NULL AUTO_INCREMENT,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    price_each DECIMAL(10, 2) NOT NULL,
    PRIMARY KEY (orderdetail_id),
    CONSTRAINT fk_orderdetail_order
        FOREIGN KEY (order_id) REFERENCES orders(order_id)
        ON DELETE CASCADE,
    CONSTRAINT fk_orderdetail_product
        FOREIGN KEY (product_id) REFERENCES products(product_id)
        ON DELETE CASCADE
);

-- 6. Create the 'payments' table with foreign keys to both 'customers' and 'orders'
CREATE TABLE IF NOT EXISTS payments (
    payment_id INT NOT NULL AUTO_INCREMENT,
    customer_id INT NOT NULL,
    order_id INT NOT NULL,
    payment_date DATE NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    PRIMARY KEY (payment_id),
    CONSTRAINT fk_payment_customer
        FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
        ON DELETE CASCADE,
    CONSTRAINT fk_payment_order
        FOREIGN KEY (order_id) REFERENCES orders(order_id)
        ON DELETE CASCADE
);

-- 7. Create the 'employees' table with a self-referencing foreign key for 'reports_to'
CREATE TABLE IF NOT EXISTS employees (
    employee_id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    position VARCHAR(100),
    reports_to INT,
    PRIMARY KEY (employee_id),
    CONSTRAINT fk_employee_reports_to
        FOREIGN KEY (reports_to) REFERENCES employees(employee_id)
        ON DELETE SET NULL
);

-- 8. Create the 'sales' table with a foreign key to 'employees'
CREATE TABLE IF NOT EXISTS sales (
    sales_id INT NOT NULL AUTO_INCREMENT,
    office_location VARCHAR(255) NOT NULL,
    employee_id INT,
    PRIMARY KEY (sales_id),
    CONSTRAINT fk_sales_employee
        FOREIGN KEY (employee_id) REFERENCES employees(employee_id)
        ON DELETE SET NULL
);
