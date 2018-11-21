<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {

	public function index()
	{
		$this->load->view('header');
		$this->load->view('home');
		$this->load->view('footer');
	}

	public function formStep5()
	{
		$label = $this->input->post('label');

		if($label == 'Exercise')
		{
			$data['focus'] = "Exercise";
			$form = $this->load->view('forms/exerciseform',$data,true);

			echo json_encode(['res'=>true,'form'=>$form]); exit;
		}
	}

	public function formStep6()
	{
		$label = $this->input->post('label');

		if($label == 'Exercise')
		{
			$data['focus'] = "Exercise";
			$form = $this->load->view('forms/exercisestepsix',$data,true);

			echo json_encode(['res'=>true,'form'=>$form]); exit;
		}
	}

	public function formStep7()
	{
		$label = $this->input->post('label');

		if($label == 'Exercise')
		{
			$data['focus'] = "Exercise";
			$form = $this->load->view('forms/exercisestepseven',$data,true);

			echo json_encode(['res'=>true,'form'=>$form]); exit;
		}
	}

	public function formStep8()
	{
		$label = $this->input->post('label');

		if($label == 'Exercise')
		{
			$data['focus'] = "Exercise";
			$form = $this->load->view('forms/exercisestepeight',$data,true);

			echo json_encode(['res'=>true,'form'=>$form]); exit;
		}
	}

	public function formStep9()
	{
		$label = $this->input->post('label');

		if($label == 'Exercise')
		{
			$data['focus'] = "Exercise";
			$form = $this->load->view('forms/exercisestepnine',$data,true);

			echo json_encode(['res'=>true,'form'=>$form]); exit;
		}
	}

	public function formStep10()
	{
		$label = $this->input->post('label');

		if($label == 'Exercise')
		{
			$data['focus'] = "Exercise";
			$form = $this->load->view('forms/exercisestepten',$data,true);

			echo json_encode(['res'=>true,'form'=>$form]); exit;
		}
	}

	public function formStep11()
	{
		$label = $this->input->post('label');

		if($label == 'Exercise')
		{
			$data['focus'] = "Exercise";
			$form = $this->load->view('forms/exercisestepeleven',$data,true);

			echo json_encode(['res'=>true,'form'=>$form]); exit;
		}
	}

    /**
     * @TODO Protect from external not authorized access
     * @param $userId
     * @return json
     */
    public function getCircleOfLifeByUserId($userId)
    {
        $this->load->library('CircleOfLifeChartProvider');

        $result = $this->circleoflifechartprovider
           ->getCircleOfLifeChartByUserIdAndDefaultChart($userId);

        $this->getJSONResponse($result);
    }

    public function writeCircleOfLifeFromUser()
    {
        $this->load->library('CircleOfLifeChartProvider');

        $dataToInsert = json_decode(file_get_contents('php://input'), true);

        $this->circleoflifechartprovider->writeCircleOfLifeFromUser($dataToInsert);

        $this->getJSONResponse(['message' => 'ok']);
    }

    private function getJSONResponse(array $response)
    {
        header('Content-Type: application/json');
        echo json_encode($response);
    }
}
?>