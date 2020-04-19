package org.javaboy.vhr.service;

import org.javaboy.vhr.mapper.EmployeeMapper;
import org.javaboy.vhr.model.Employee;
import org.javaboy.vhr.model.RespPageBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {
    @Autowired
    EmployeeMapper employeeMapper;
    public RespPageBean getEmployeeByPage(Integer page, Integer size, String keyword) {
        if (page!=null && size!=null) {
            page=(page-1)*size;
        }
        List<Employee> data = employeeMapper.getEmployeeByPage(page, size,keyword,null,null);
        Long total = employeeMapper.getTotal(keyword);

        RespPageBean bean = new RespPageBean();
        bean.setData(data);
        bean.setTotal(total);
        return  bean;

    }

    public Integer addEmp(Employee employee) {
        return employeeMapper.insertSelective(employee);
    }

    public Integer maxWorkID() {
        return  employeeMapper.maxWorkID();
    }
}
