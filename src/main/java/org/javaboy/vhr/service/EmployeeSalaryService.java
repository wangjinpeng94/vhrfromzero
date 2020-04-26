package org.javaboy.vhr.service;

import org.javaboy.vhr.mapper.EmpSalaryMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeSalaryService {
    @Autowired
    EmpSalaryMapper empSalaryMapper;
    public Integer deleteEmpSalaryByEid(Integer eid){
        return empSalaryMapper.deleteEmpByEid(eid);
    }
}
