<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TaskResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'img' => $this->img,
            'h1' => $this->h1,
            'h2' => $this->h2,
            'url' => $this->url,
            'client' => $this->client,
            'services' => $this->services,
            'sait' => $this->sait,
            'sait_url' => $this->sait_url,
            'about_project' => $this->about_project,
            'purpose' => $this->purpose,
            'idea' => $this->idea,
            'trademark_style' => $this->trademark_style,
            'guideline' => $this->guideline,
            'result' => $this->result,
            'team' => $this->team,
            'images' => GetimgResource::collection($this->getimg)
        ];
    }
}
