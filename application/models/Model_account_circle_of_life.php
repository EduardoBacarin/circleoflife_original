<?php

class Model_Account_Circle_Of_Life extends CI_Model
{
    function __construct()
    {
        parent::__construct(); // construct the Model class
    }
    /**
     * @param array $criteria
     * @return array
     */
    public function fetchByCriteriaJoinedWithCircle(array $criteria)
    {
        $this->db->where($criteria);
        $this->db->join(
           'circle_of_life',
           'circle_of_life.id = account_circle_of_life.circle_of_life_id'
        );

        return $this->db->get('account_circle_of_life')->result();
    }

    /**
     * @param string $tableName
     * @param array $dataToInsert
     */
    public function write($tableName, array $dataToInsert)
    {
        if (count($dataToInsert) > 1) {
            return $this->db->insert_batch($tableName, $dataToInsert);
        }

        return $this->db->insert($tableName, $dataToInsert);
    }

    /**
     * @param int $userId
     */
    public function cleanUpByUserId($userId)
    {
        return $this->db->delete('account_circle_of_life', ['account_id' => $userId]);
    }
}
