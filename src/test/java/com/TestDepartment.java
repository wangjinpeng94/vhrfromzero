package com;

import org.javaboy.vhr.VhrfromzeroApplication;
import org.javaboy.vhr.mapper.DepartmentMapper;
import org.javaboy.vhr.model.Department;
import org.javaboy.vhr.service.DepartmentService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = VhrfromzeroApplication.class)
public class TestDepartment {
    @Autowired
    DepartmentMapper departmentMapper;
    @Autowired
    DepartmentService departmentService;
    @Test
    public void Test(){
        Department department = new Department();
        department.setName("fff");
        department.setParentId(107);
        department.setEnabled(true);
        departmentService.addDep(department);
    }


}
