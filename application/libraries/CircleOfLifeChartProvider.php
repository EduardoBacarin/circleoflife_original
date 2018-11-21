<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class CircleOfLifeChartProvider
{
    public function __construct()
    {
        $this->CI = &get_instance();
        $this->CI->load->model('model_circle_of_life');
        $this->CI->load->model('model_account_circle_of_life');
    }

    /**
     * @param array $dataToInsert
     */
    public function writeCircleOfLifeFromUser($dataToInsert)
    {
        $this->CI->model_account_circle_of_life->cleanUpByUserId($dataToInsert[0]['account_id']);
        return $this->CI->model_account_circle_of_life->write('account_circle_of_life', $dataToInsert);
    }

    public function getCircleOfLifeChartByUserIdAndDefaultChart($userId)
    {
        return [
            'userChart' => isset($userId) ? $this->getCircleOfLifeAreasByUserId($userId) : [],
            'defaultChart' => $this->getDefaultCircleOfLifeAreasAndValues()
        ];
    }

    /**
     * @param $userId
     * @return array
     */
    private function getCircleOfLifeAreasByUserId($userId)
    {
        $criteriaArray = [];

        if ($userId) {
            $userId = (int)$userId;
            $criteriaArray = ['account_id' => $userId];
        }

        $result = [];

        $areas = $this->CI->model_account_circle_of_life->fetchByCriteriaJoinedWithCircle(
           $criteriaArray
        );

        foreach ($areas as $area) {
            $result[] = [
               'id_circle_of_life' => $area->circle_of_life_id,
               'description' => $area->description,
               'score' => $area->result
            ];
        }

        return $result;
    }

    private function getDefaultCircleOfLifeAreasAndValues()
    {
        $result = [];

        $areas = $this->CI->model_circle_of_life->fetchAll();

        $i = 0;
        foreach ($areas as $area) {
            $result[] = [
               'id_circle_of_life' => $area->id,
               'description' => $area->description,
               'score' => $i++ == count($area) - 1 ? 10 : 5
            ];
        }

        return $result;
    }
}