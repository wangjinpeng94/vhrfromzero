package org.javaboy.vhr.service;

import org.javaboy.vhr.mapper.MenuRoleMapper;
import org.javaboy.vhr.model.RespBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class MenuRoleService {
    @Autowired
    MenuRoleMapper menuRoleMapper;
    public Integer updateMenuRole(Integer rid, Integer[] mids) {
         menuRoleMapper.deleteByRid(rid);
        Integer result = menuRoleMapper.insertRecord(rid, mids);
        return result;

    }
}
