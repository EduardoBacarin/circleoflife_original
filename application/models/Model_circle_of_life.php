<?php

class Model_Circle_Of_Life extends CI_Model
{
    function __construct()
    {
        parent::__construct(); // construct the Model class
    }
    /**
     * @param bool $isToGetOnlyActive
     * @return array
     */
    public function fetchAll($isToGetOnlyActive=true)
    {
        if ($isToGetOnlyActive) {
            $this->db->where('active', 1);
        }
        return $this->db->get('circle_of_life')->result();
    }
}
