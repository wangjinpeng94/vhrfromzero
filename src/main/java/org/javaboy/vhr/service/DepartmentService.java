package org.javaboy.vhr.service;

import org.javaboy.vhr.mapper.DepartmentMapper;
import org.javaboy.vhr.model.Department;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepartmentService {
    @Autowired
    DepartmentMapper departmentMapper;
    public List<Department> getAllDepartmentsByParentId() {
        return departmentMapper.getAllDepartmentsByParentId(-1);
    }

    public void addDep(Department department) {
        department.setEnabled(true);
        System.out.println("department"+department.toString());
        departmentMapper.addDep(department);

    }

    public void deleteDepById(Department department) {

     departmentMapper.deleteDepById(department);
    }

    public List<Department> getAllDepartments() {
        return  departmentMapper.getAllDepartmentsByParentId(-1);
    }
}
