package org.javaboy.vhr.mapper;

import org.apache.ibatis.annotations.Param;
import org.javaboy.vhr.model.Employee;

import java.util.Date;
import java.util.List;

public interface EmployeeMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Employee record);

    int insertSelective(Employee record);

    Employee selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Employee record);

    int updateByPrimaryKey(Employee record);
//
    List<Employee> getEmployeeByPage(@Param("page") Integer page, @Param("size") Integer size,@Param("keyword") String keyword ,@Param("emp") Employee employee, @Param("beginDateScope") Date[] beginDateScope);
//@Param("emp") Employee employee, @Param("beginDateScope") Date[] beginDateScope
    Long getTotal(@Param("keyword") String keyword);



    Integer addEmps(@Param("list") List<Employee> list);

    Employee getEmployeeById(Integer id);

    List<Employee> getEmployeeByPageWithSalary(@Param("page") Integer page, @Param("size") Integer size);

    Integer updateEmployeeSalaryById(@Param("eid") Integer eid, @Param("sid") Integer sid);

    Integer maxWorkID();
}