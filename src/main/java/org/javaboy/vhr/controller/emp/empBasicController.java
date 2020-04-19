package org.javaboy.vhr.controller.emp;

import com.sun.org.apache.bcel.internal.generic.ARETURN;
import org.javaboy.vhr.model.*;
import org.javaboy.vhr.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/emp/basic")
public class empBasicController {
    @Autowired
    EmployeeService employeeService;
    @Autowired
    NationService nationService;
    @Autowired
    PoliticsstatusService politicsstatusService;
    @Autowired
    JobLevelService jobLevelService;
    @Autowired
    PositionService positionService;
    @Autowired
    DepartmentService departmentService;

    @GetMapping("/")
    public RespPageBean getEmployeeByPage(@RequestParam(defaultValue = "1") Integer page,
                                          @RequestParam(defaultValue = "10") Integer size,
                                          String keyword){

        return employeeService.getEmployeeByPage(page, size,keyword);
    }
    @PostMapping("/")
    public RespBean addEmp(@RequestBody Employee employee){
        if (employeeService.addEmp(employee)==1) {
            return RespBean.ok("添加成功！");
        }
        return  RespBean.error("添加失败！");
    }
    @GetMapping("/nations")
    public List<Nation> getAllNations(){
        return nationService.getAllNations();
    }

    @GetMapping("/politicsstatus")
    public List<Politicsstatus> getAllpoliticsstatus(){
        return politicsstatusService.getAllpoliticsstatus();
    }

    @GetMapping("/jobLevel")
    public List<JobLevel> getAllJobLevels(){
        return jobLevelService.getAllJobLevels();
    }

    @GetMapping("/positions")
    public List<Position> getAllPositions(){
        return positionService.getAllPositions();
    }
    @GetMapping("/maxWorkID")
    public RespBean maxWorkID(){
        RespBean respBean = RespBean.build().setStatus(200)
                .setObj(String.format("%08d", employeeService.maxWorkID() + 1));
        System.out.println("respBean:"+respBean.toString());
        return respBean;
    }
    @GetMapping("/deps")
    public List<Department>getAllDepartments(){
        System.out.println("deps:");
        return  departmentService.getAllDepartments();
    }


}
