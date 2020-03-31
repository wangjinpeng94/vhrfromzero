package org.javaboy.vhr.controller.system.basic;

import org.javaboy.vhr.model.Department;
import org.javaboy.vhr.model.RespBean;
import org.javaboy.vhr.service.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/system/basic/department")
public class DepartmentController {
    @Autowired
    DepartmentService departService;
    @GetMapping("/")
    public List<Department> getAllDepartmentsById(){
        return departService.getAllDepartmentsByParentId();
    }
    @PostMapping("/")
    public RespBean addDep(@RequestBody Department department){
       departService.addDep(department);
        if (department.getResult()==1) {
            return RespBean.ok("添加成功！",department);
        }
        return RespBean.error("添加失败！");


    }
    @DeleteMapping("/{id}")
    public  RespBean deleteDepById(@PathVariable Integer id){
        Department department = new Department();
        department.setId(id);
        departService.deleteDepById(department);
        if (department.getResult()==-2) {
            return RespBean.error("该部门下有部门，删除失败！");

        }else if(department.getResult()==-1){
            return RespBean.error("该部门下有员工，删除失败！");
        }
        else if(department.getResult()==1){
            return RespBean.error("删除成功！");
        }
        return RespBean.error("删除失败！");

    }
}
