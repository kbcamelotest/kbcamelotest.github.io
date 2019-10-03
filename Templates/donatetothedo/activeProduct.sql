create view v_fudgemart_display_active_products
    as 
select product_id, product_name, product-department, product_wholesale_price, product_retail_price, vendor_id, vendor_name, vendor_website
    from fudgemart_products join fudgemart_vendors on vendor_id=product_vendor_id
    where product_is_active=1
    
/* Select */

select TABLE_NAME, VIEW_DEFINITION
    from INFORMATION_SCHEMA VIEWS
    where TABLE_NAME = "v_fudgemart_display_active_products"
    
    
alter view v_fudgemart_display_active_products
as
select

/* 1C */

select vendor_name, product_name, product_wholesale_price, product_retail_price
    from v_fudgemart_display_active_products
    where product_department = 'Hardware'
    order by vendor_name, product_name
    
